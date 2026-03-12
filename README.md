# 🏷️ Portfólio Profissional 

> Projeto acadêmico desenvolvido para a disciplina de **Laboratório de Desenvolvimento de Software**, com o objetivo de criar um portfólio web reutilizável.

---

## 🚧 Status do Projeto

![Status](https://img.shields.io/badge/status-em%20desenvolvimento%20ativo-yellow)
![Versão](https://img.shields.io/badge/versão-0.4-blue)
![Licença](https://img.shields.io/badge/licença-MIT-green)
![Funcionalidades implementadas](https://img.shields.io/badge/funcionalidades-100%25-lightgrey)

---

## 📚 Índice
- [Wireframe](#-wireframe)
- [Protótipo](#-protótipo)
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Autores](#-autores)
- [Tecnologias Utilizadas](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Estrutura das Páginas](#-estrutura-das-páginas)
- [Como Executar](#-como-executar)


---

## 🔗 Wireframe

- 🎨 Figma: https://www.figma.com/design/FGR596awWqFuYUBk3jcczj/Portfolio

---

## 📷 Protótipo

- **Home:**  
  ![Home](Artefatos/Imagens/home-prototipo.png)

- **Sobre:**  
  ![Sobre](Artefatos/Imagens/sobre-prototipo.png)

- **Projetos:**  
  ![Projetos](Artefatos/Imagens/projetos-prototipo.png)
  
---

## 📝 Sobre o Projeto

Portfólio web profissional desenvolvido como projeto acadêmico para a disciplina **Laboratório de Desenvolvimento de Software**.  
A aplicação apresenta uma estrutura moderna e reutilizável para exibição de informações profissionais, projetos e habilidades.  

**Principais características:**

- Suporte a múltiplos idiomas (Português e Inglês)  
- Geração de PDF com os dados do portfólio  
- Design moderno com backgrounds 3D interativos  
- Estrutura escalável e organizada para fácil manutenção e personalização  

---

## ✨ Funcionalidades

- 🏠 Página inicial com introdução do autor  
- 👤 Página **Sobre Mim** com descrição detalhada (PT/EN)  
- 💻 Exibição de habilidades  
- 📁 Projetos exibidos em formato de cards com descrição e tecnologias utilizadas
- 🔗 Links para repositórios  
- 📩 Área de contato (estrutura inicial)  
- 📄 Header e Footer padronizados  

---

## 👨‍💻 Portfolio

🔗 https://portfolio-bernardocarvalho.vercel.app
  
---

## 🛠 Tecnologias

**Frontend:**

- React 19.2.0 – Biblioteca JavaScript para construção de interfaces
- React Router DOM 7.13.1 – Gerenciamento de rotas e navegação entre páginas
- React i18next 16.5.4 – Suporte a internacionalização (PT/EN)
- i18next 25.8.14 – Framework de internacionalização
- Vite 7.3.1 – Ferramenta de build e servidor de desenvolvimento

**Bibliotecas:**

- jsPDF 4.2.0 – Geração de documentos PDF do portfólio
- @splinetool/react-spline 4.1.0 – Criação de backgrounds 3D interativos
- @emailjs/browser 4.4.1 – Integração com EmailJS para envio de emails


**Fontes:**

- Exo 2 – Fonte para títulos e cabeçalhos
- Geocode – Fonte para textos gerais
- JetBrains Mono – Fonte para elementos de código e botões

---

## 🔌 APIs Utilizadas

- **GitHub API:** lista repositórios, obtém linguagens e descrições, ordena por data  
- **EmailJS:** envio de mensagens do formulário de contato  
- **Spline Design:** backgrounds 3D interativos  
- **GitHub OpenGraph API:** gera thumbnails automáticas dos projetos  

---

## 📁 Estrutura do Projeto

```
portfolio-app/
├── Artefatos/                      # Documentação e recursos do projeto
│   ├── Imagens/                    # Imagens do protótipo
│   │   ├── home-prototipo.png
│   │   ├── sobre-prototipo.png
│   │   └── projetos-prototipo.png
│   └── Wireframes-Portfolio_V1.png # Wireframes do projeto
│
├── Code/                           # Código-fonte da aplicação
│   ├── public/                     # Arquivos estáticos públicos
│   │   └── vite.svg               # Logo do Vite
│   │
│   ├── src/                        # Código-fonte principal
│   │   ├── assets/                # Recursos estáticos
│   │   │   ├── css/              # Folhas de estilo organizadas
│   │   │   │   ├── App.css
│   │   │   │   ├── Contato.css
│   │   │   │   ├── Experiencias.css
│   │   │   │   ├── Home.css
│   │   │   │   ├── Intro.css
│   │   │   │   ├── PDF.css
│   │   │   │   ├── Projetos.css
│   │   │   │   ├── Sobre.css
│   │   │   │   └── index.css
│   │   │   └── img/              # Imagens da aplicação
│   │   │       ├── react.svg
│   │   │       └── user.png
│   │   │
│   │   ├── components/            # Componentes reutilizáveis
│   │   │   ├── changeLanguage.jsx # Seletor de idioma
│   │   │   ├── Footer.jsx         # Rodapé com contatos
│   │   │   ├── Footer.css
│   │   │   ├── Header.jsx         # Barra de navegação
│   │   │   ├── Header.css
│   │   │   ├── Intro.jsx          # Tela de introdução 3D
│   │   │   ├── Layout.jsx         # Layout principal da aplicação
│   │   │   ├── Layout.css
│   │   │   ├── SplineBackground.jsx  # Fundo 3D interativo
│   │   │   └── SplineBackground.css
│   │   │
│   │   ├── config/                # Configurações da aplicação
│   │   │   └── emailJsConfig.js   # Configuração do EmailJS
│   │   │
│   │   ├── data/                  # Dados estruturados
│   │   │   ├── experienciasData.js  # Dados de experiências
│   │   │   └── portfolioData.js     # Dados principais do portfólio
│   │   │
│   │   ├── locales/               # Arquivos de tradução i18n
│   │   │   ├── pt.json           # Traduções em português
│   │   │   └── en.json           # Traduções em inglês
│   │   │
│   │   ├── pages/                 # Páginas da aplicação
│   │   │   ├── Contato.jsx       # Formulário de contato
│   │   │   ├── Experiências.jsx  # Página de experiências
│   │   │   ├── Home.jsx          # Página inicial
│   │   │   ├── PDF.jsx           # Geração e download de PDF
│   │   │   ├── Projetos.jsx      # Listagem de projetos do GitHub
│   │   │   └── Sobre.jsx         # Página sobre (PT/EN)
│   │   │
│   │   ├── App.jsx                # Componente raiz da aplicação
│   │   ├── i18n.js                # Configuração i18next
│   │   ├── main.jsx               # Ponto de entrada React
│   │   └── index.css              # Estilos globais e variáveis CSS
│   │
│   ├── .env.example               # Exemplo de variáveis de ambiente
│   ├── .gitignore                 # Arquivos ignorados pelo Git
│   ├── .hintrc                    # Configuração de hints do navegador
│   ├── eslint.config.js           # Configuração ESLint
│   ├── index.html                 # HTML principal
│   ├── package.json               # Dependências e scripts
│   ├── package-lock.json          # Lock de dependências
│   ├── README.md                  # Documentação do código
│   └── vite.config.js             # Configuração Vite
│
├── .gitignore                      # Gitignore raiz
├── package.json                    # Dependências globais
├── package-lock.json               # Lock global
└── README.md                       # Documentação principal do projeto
```

## 📐 Estrutura das Páginas

- **Home:** Página inicial com apresentação e navegação  
- **Sobre mim:** Informações detalhadas e habilidades  
- **Projetos:** Listagem dos projetos desenvolvidos
- **PDF:** Geração do PDF com informações do portfólio
- **Header:** Navegação entre páginas  
- **Footer:** Contato e links adicionais  

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Conta no EmailJS (para funcionalidade de contato)

1. Instale as dependências:
```bash
npm install @splinetool/react-spline jspdf @emailjs/browser
```

2. Execute o projeto:
```bash
npm run dev
```


