import React from 'react';
import CV from './racheltjarksen_resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
    </div>
  );
};

export default CTA;
