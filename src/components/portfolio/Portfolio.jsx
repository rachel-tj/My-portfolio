import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Study Habits Website",
      img: IMG1,
      description:
        "write something here",
      technologies: "MySQL | React | Node ",
      link: "https://google.com",
      github: "https://github.com/FrankieMNyaga/Software-Engineering",
    },
    {
      id: 2,
      title: "Transformers Research Paper",
      img: IMG4,
      description:
        "write something here",
      technologies: "BERT | Spacy | Scikitlearn",
      link: "https://google.com",
      github: "https://google.com",
    },
    {
      id: 3,
      title: "Single-Player Web Games",
      img: IMG2,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "HTML | CSS | Javascipt",
      link: "https://google.com",
      github: "https://google.com"
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
