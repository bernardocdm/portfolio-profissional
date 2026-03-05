import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">[Nome do Autor]</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/sobre" className="nav-link">Sobre Mim</Link>
          <Link to="/experiencias" className="nav-link">Experiências</Link>
          <Link to="/projetos" className="nav-link">Projetos</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
          <Link to="/pdf" className="nav-link">PDF</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
