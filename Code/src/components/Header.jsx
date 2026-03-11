import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import LanguageSwitcher from "../components/changeLanguage";

function Header() {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Bernardo Carvalho</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">
            {t("home-header")}
          </Link>
          <Link to="/sobre" className="nav-link">
            {t("sobremim-header")}
          </Link>
          <Link to="/experiencias" className="nav-link">
            {t("Experiencias-header")}
          </Link>
          <Link to="/projetos" className="nav-link">
            {t("projetos-header")}
          </Link>
          <Link to="/contato" className="nav-link">
            {t("contato-header")}
          </Link>
          <Link to="/pdf" className="nav-link">
            PDF
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}

export default Header;
