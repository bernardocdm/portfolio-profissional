import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">Olá, eu sou [Nome do Autor]</h1>
<p className="hero-description">
  Este é um portfólio acadêmico desenvolvido para apresentar projetos, habilidades
  e experiências adquiridas ao longo da formação em Engenharia de Software.
</p>
        <Link to="/sobre" className="cta-button">
          Sobre Mim
        </Link>
      </div>
    </div>
  );
}

export default Home;
