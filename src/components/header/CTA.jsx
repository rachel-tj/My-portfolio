import React from 'react';
import CV from '/Users/racheltj/github_repos/My-portfolio/src/assets/racheltjarksen_resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
