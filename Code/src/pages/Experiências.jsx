import '../assets/css/Experiencias.css';

function Experiencias() {
  const experiencias = [
    {
      id: 1,
      empresa: "Empresa Exemplo",
      cargo: "Desenvolvedor Full Stack",
      periodo: "Jan 2024 - Atual",
      descricao:
        "Atuação no desenvolvimento de aplicações web utilizando React, Laravel e integração com APIs REST. Participação ativa em decisões de arquitetura e melhoria de performance.",
    },
    {
      id: 2,
      empresa: "Startup Tech",
      cargo: "Estagiário em Desenvolvimento",
      periodo: "Ago 2023 - Dez 2023",
      descricao:
        "Desenvolvimento de funcionalidades frontend com React e manutenção de backend em Node.js. Colaboração em ambiente ágil utilizando Scrum.",
    },
    {
      id: 3,
      empresa: "Projeto Open Source",
      cargo: "Colaborador",
      periodo: "2023",
      descricao:
        "Contribuição com correções de bugs e melhorias de documentação em projeto open source no GitHub.",
    },
  ];

  return (
    <div className="experiencias">
      <div className="container">
        <h1 className="page-title">Experiências</h1>

        <div className="experience-grid">
          {experiencias.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h3 className="experience-company">{exp.empresa}</h3>
                <span className="experience-period">{exp.periodo}</span>
              </div>

              <h4 className="experience-role">{exp.cargo}</h4>

              <p className="experience-description">
                {exp.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiencias;