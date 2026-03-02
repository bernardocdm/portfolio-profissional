import "./Sobre.css";
import { useTranslation } from "react-i18next";
//import foto from '../assets/user.png';

function Sobre() {
  const skills = [];
  const { t, i18n } = useTranslation();

  return (
    <div className="sobre">
      <div className="container">
        <h1 className="page-title">{t("Sobre Mim")}</h1>

        <div className="about-content">
          <div className="photo-section">
            <div className="photo-placeholder">
              {/* <img src={foto} alt="Foto do autor" className="photo" /> */}
              <span>Sua Foto</span>
            </div>
          </div>

          <div className="info-section">
            <div className="language-section">
              <h2>{t("titulo")}</h2>
              <p>{t("sobre")}</p>
              <button onClick={() => i18n.changeLanguage("pt")}>
                Português
              </button>
              <button onClick={() => i18n.changeLanguage("en")}>English</button>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>Habilidades</h2>
          <p style={{ textAlign: "center" }}>
            Lista de tecnologias, ferramentas e competências desenvolvidas
            durante a formação acadêmica e projetos realizados.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
