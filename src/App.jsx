// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Artist from './components/Artist';
import MusicPlayer from './components/MusicPlayer';
import PlaylistPage from './components/PlaylistPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MusicPlayer />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/music" element={<MusicPlayer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
