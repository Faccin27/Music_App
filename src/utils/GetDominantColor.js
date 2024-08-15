export default function GetDominantColor(imageElement, ratio) {
    const canvas = document.createElement("canvas");

    let height = canvas.height = imageElement.naturalHeight;
    let width = canvas.width = imageElement.naturalWidth;

    const context = canvas.getContext("2d");
    context.drawImage(imageElement, 0, 0);

    let data, length;
    let i = -4,
        count = 0;

    try {
        data = context.getImageData(0, 0, width, height);
        length = data.data.length;
    } catch (err) {
        console.error(err);
        return "#ffffff"; // Retorna branco como padrão em caso de erro
    }

    let R = 0, G = 0, B = 0;

    while ((i += ratio * 4) < length) {
        ++count;
        R += data.data[i];
        G += data.data[i + 1];
        B += data.data[i + 2];
    }

    R = ~~(R / count);
    G = ~~(G / count);
    B = ~~(B / count);

    // Função para aumentar saturação e brilho, e evitar cores escuras
    const enhanceColor = (r, g, b) => {
        // Convertendo RGB para HSL
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
                default: break;
            }

            h /= 6;
        }

        // Aumentar saturação e brilho, e forçar luz para ser alta
        s = Math.min(s * 2, 1); // Aumenta a saturação ao máximo
        l = Math.min(l * 2, 0.9); // Aumenta o brilho e força luz alta, mas sem ultrapassar 90% para evitar puro branco

        // Convertendo de volta para RGB
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        return [
            Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
            Math.round(hue2rgb(p, q, h) * 255),
            Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
        ];
    };

    [R, G, B] = enhanceColor(R, G, B);

    // Converte para formato hexadecimal
    const toHex = (value) => {
        return value.toString(16).padStart(2, '0');
    };

    return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
}
