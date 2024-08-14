import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Playlist from './Playlist';
import Artist from './Artist'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/artist' element={<Artist/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
        <Route path='*' element={<h1>Not found</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
