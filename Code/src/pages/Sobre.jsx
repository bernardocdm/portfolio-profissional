import "../assets/css/Sobre.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import foto from "../assets/img/user.png";

function Sobre() {
  const skills = [
  'JavaScript',
  'CSS',
  'React'
];
  const { t, i18n } = useTranslation();

  return (
    <div className="sobre">
      <div className="container">
        <h1 className="page-title">{t("Sobre Mim")}</h1>

        <div className="about-content">
          <div className="photo-section">
            <div className="photo-placeholder">
              <img src={foto} alt="Foto do autor" className="photo" /> 
              <span>Sua Foto</span>
            </div>
          </div>

          <div className="info-section">
            <div className="language-section">
              <h2>{t("titulo")}</h2>
              <p>{t("sobre")}</p>
              <div className="language-buttons">
                <button className="language-button" onClick={() => i18n.changeLanguage("pt")}>
                  Português
                </button>
                <button className="language-button" onClick={() => i18n.changeLanguage("en")}>
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>Habilidades</h2>
          <p style={{ textAlign: 'center' }}>Lista de tecnologias, ferramentas e competências desenvolvidas durante a formação acadêmica e projetos realizados.

          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
                </div>
              ))}
              </div>
              </div>
              

              <div className="action-buttons">
                <Link to="/projetos" className="cta-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span>Ver Meus Projetos</span>
                </Link>
                <Link to="/pdf" className="cta-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                  <span>Download PDF</span>
                </Link>
              </div>
      </div>
    </div>
  );
}

export default Sobre;
