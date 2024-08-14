export default function updateBackground(imageUrl) {
    const body = document.body;

    body.style.background = `url(${imageUrl}) no-repeat center center fixed`;
    body.style.backgroundSize = 'cover';
    body.style.backdropFilter = 'blur(50px)';
}