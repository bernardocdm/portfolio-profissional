import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import PDF from './pages/PDF';
import Contato from './pages/Contato';
import Experiencias from './pages/Experiências';
import './assets/css/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="experiencias" element={<Experiencias />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="pdf" element={<PDF />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
