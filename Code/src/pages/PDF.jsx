import { useState } from 'react';
import { jsPDF } from 'jspdf';
import { useTranslation } from 'react-i18next';
import '../assets/css/PDF.css';
import { portfolioData } from "../data/portfolioData";
import { experienciasData } from "../data/experienciasData";
import foto from '../assets/img/user.png';

function PDF() {
  const [isGenerating, setIsGenerating] = useState(false);
  const { t } = useTranslation();

  const generatePDF = async (language = 'pt') => {
    setIsGenerating(true);

    try {
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const marginLeft = 20;
      const marginRight = 20;
      const contentWidth = pageWidth - marginLeft - marginRight;
      let yPosition = 20;

      // Título principal
      doc.setFont('Exo 2', 'bold');
      doc.setFontSize(24);
      doc.text(portfolioData.name, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 15;

      doc.addImage(foto, 'PNG', pageWidth / 2 - 20, yPosition, 40, 40);
      yPosition += 50;

      doc.setFont('Geocode', 'normal');
      doc.setFontSize(12);
      const subtitle = language === 'en' ? 'Professional Portfolio' : 'Portfólio Profissional';
      doc.text(subtitle, pageWidth / 2, yPosition, { align: 'center' });
      yPosition += 20;

      // Sobre mim
      doc.setFont('Exo 2', 'bold');
      doc.setFontSize(16);
      const aboutTitle = language === 'en' ? 'About Me' : 'Sobre Mim';
      doc.text(aboutTitle, marginLeft, yPosition);
      yPosition += 10;

      doc.setFont('Geocode', 'normal');
      doc.setFontSize(11);
      const aboutText = t("assunto-sobremim", { lng: language });
      const aboutLines = doc.splitTextToSize(aboutText, contentWidth);
      doc.text(aboutLines, marginLeft, yPosition);
      yPosition += aboutLines.length * 7 + 15;

      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Habilidades
      doc.setFont('Exo 2', 'bold');
      doc.setFontSize(16);
      const skillsTitle = language === 'en' ? 'Skills' : 'Habilidades';
      doc.text(skillsTitle, marginLeft, yPosition);
      yPosition += 10;

      doc.setFont('Geocode', 'normal');
      doc.setFontSize(11);
      const skillsText = portfolioData.skills.join(', ');
      const skillsLines = doc.splitTextToSize(skillsText, contentWidth);
      doc.text(skillsLines, marginLeft, yPosition);
      yPosition += skillsLines.length * 7 + 15;

      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Experiências
      doc.setFont('Exo 2', 'bold');
      doc.setFontSize(16);
      const experienceTitle = language === 'en' ? 'Experiences' : 'Experiências';
      doc.text(experienceTitle, marginLeft, yPosition);
      yPosition += 10;

      doc.setFont('Geocode', 'normal');
      doc.setFontSize(11);

      experienciasData.forEach((exp) => {
        if (yPosition > 230) {
          doc.addPage();
          yPosition = 20;
        }

        const empresa = t(exp.empresa, { lng: language });
        const cargo = t(exp.cargo, { lng: language });
        const periodo = t(exp.periodo, { lng: language });
        const descricao = t(exp.descricao, { lng: language });

        doc.setFont('Exo 2', 'bold');
        doc.text(`${empresa}`, marginLeft, yPosition);
        yPosition += 6;

        doc.setFont('Geocode', 'italic');
        doc.text(`${cargo} • ${periodo}`, marginLeft, yPosition);
        yPosition += 6;

        doc.setFont('Geocode', 'normal');
        const descLines = doc.splitTextToSize(descricao, contentWidth);
        doc.text(descLines, marginLeft, yPosition);
        yPosition += descLines.length * 6 + 10;
      });

      if (yPosition > 240) {
        doc.addPage();
        yPosition = 20;
      }

      // Projetos
      doc.setFont('Exo 2', 'bold');
      doc.setFontSize(18);
      const projectsTitle = language === 'en' ? 'Projects' : 'Projetos';
      doc.text(projectsTitle, marginLeft, yPosition);
      yPosition += 12;

      const response = await fetch("https://api.github.com/users/Mateus7799/repos");
      const data = await response.json();
      const projects = data
        .filter(repo => !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 5);

      projects.forEach((project, index) => {
        if (yPosition > 230) {
          doc.addPage();
          yPosition = 20;
        }

        doc.setFont('Exo 2', 'bold');
        doc.setFontSize(14);
        doc.text(`${index + 1}. ${project.name}`, marginLeft, yPosition);
        yPosition += 8;

        doc.setFont('Geocode', 'normal');
        doc.setFontSize(10);
        const desc = project.description || "Sem descrição";
        const descLines = doc.splitTextToSize(desc, contentWidth);
        doc.text(descLines, marginLeft, yPosition);
        yPosition += descLines.length * 6 + 5;

        doc.setFont('Geocode', 'italic');
        const tech = project.language || "N/A";
        doc.text(`Tecnologia: ${tech}`, marginLeft, yPosition);
        yPosition += 6;

        // GitHub link sem cor azul
        doc.textWithLink('GitHub', marginLeft, yPosition, { url: project.html_url });
        yPosition += 12;
      });

      // Data de geração
      const today = new Date();
      const formattedDate = language === 'en' ? today.toLocaleDateString('en-US') : today.toLocaleDateString('pt-BR');
      doc.setFont('Geocode', 'italic');
      doc.setFontSize(8);
      const generatedLabel = language === 'en' ? 'Generated on:' : 'Gerado em:';
      doc.text(`${generatedLabel} ${formattedDate}`, pageWidth / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });

      const filename = language === 'en' ? 'portfolio-en.pdf' : 'portfolio-pt.pdf';
      doc.save(filename);

    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar o PDF. Por favor, tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="pdf">
      <div className="container">
        <h1 className="page-title">{t("titulo-pdf")}</h1>

        <div className="pdf-preview-card">
          <div className="pdf-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>

          <h2 className="pdf-subtitle">{t("titulo2-pdf")}</h2>

          <p className="pdf-description">{t("descricao-pdf")}</p>

          <ul className="pdf-features">
            {[t("info1"), t("info2"), t("info3"), t("info4")].map((info, i) => (
              <li key={i}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{info}</span>
              </li>
            ))}
          </ul>

          <div className="pdf-buttons">
            <button onClick={() => generatePDF('pt')} disabled={isGenerating} className="download-button">
              {isGenerating ? <>Gerando PDF...</> : <>Download PDF (Português)</>}
            </button>
            <button onClick={() => generatePDF('en')} disabled={isGenerating} className="download-button download-button-secondary">
              {isGenerating ? <>Generating PDF...</> : <>Download PDF (English)</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PDF;