import videoToMp3 from "../assets/images/video-to-mp3.png";
import payfast from "../assets/images/payfast.png";
import playMicroservices from "../assets/images/play-microservices.png";
import deliveryApp from "../assets/images/delivery-app.png";
import blog from "../assets/images/blog.png";
import ingestionApp from "../assets/images/ingestion-app.png";

import masivoCapital from "../assets/images/masivo-capital.jpg";
import rutaPrimavera from "../assets/images/ruta-primavera.png";
import connect4Ai from "../assets/images/connect-4-ai.png";

export const fullStackProjects = [
  {
    image: videoToMp3,
    source: "https://github.com/Gerdava2602/Video-to-mp3",
    title: "Video to MP3 Converter",
    description:
      "A web app that converts video files to MP3 files using Python, Flask, MongoDB, Kubernetes and MySQL.",
  },
  {
    image: payfast,
    source: "https://github.com/AlejandroBlanco2001/PayFast",
    title: "Payfast",
    description:
      "A payment platform created with Express, React and PostgreSQL.",
  },
  {
    image: playMicroservices,
    source: "https://github.com/Gerdava2602/Play-microservices",
    title: "Play Microservices",
    description:
      "A set of microservicess that manages important functionalities of RPG video games logic such as inventory, shopping catalog, etc, using C#, .NET7, MongoDB, RabbitMQ and Docker.",
  },
  {
    image: deliveryApp,
    source: "https://github.com/Gerdava2602/backend-final-project",
    title: "Delivery App",
    description:
      "Backend of a delivery app using Node.js, Express and MongoDB.",
  },
  {
    image: blog,
    source: "https://github.com/Gerdava2602/Advanced-blog",
    title: "Advanced Blog",
    description:
      "A blog with several features as categories, cards, end to end navigation and post creation using Django, React and Redux.",
  },
  {
    image: ingestionApp,
    title: "Ingestion App",
    description:
      "A web app to ingest data from multiple companies and show them in a dashboard using React, Node.js, Express, MySQL and Power BI, deployed in Azure.",
  },
];

export const dataScienceProjects = [
  {
    title: "Masivo Capital Project",
    image: masivoCapital,
    source: "https://github.com/Gerdava2602/Masivo-Project",
    description:
      "Web application to display reports, predictions, clustering and KPIs based on a data analysis, model creation and database handling process using data provided by 'trasmilenio' the massive transport system in the city of Bogotá.",
  },
  {
    title: "Ruta Primavera",
    image: rutaPrimavera,
    source: "https://github.com/Gerdava2602/WRF-visualization-tool",
    description:
      "Project alongside the SIAD research group, using the WRF-CHEM model to forecast contamination in main cities as Bogotá, Medellín and Barranquilla",
  },
  {
    title: "Connect-4 AI",
    image: connect4Ai,
    source: "https://github.com/Gerdava2602/Connect-4-AI",
    description:
      "AI that plays connect-4 using the minimax algorithm and alpha-beta pruning alongside with manually created heuritics.",
  },
];
