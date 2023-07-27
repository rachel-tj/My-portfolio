import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './repos.css';

const Repos = () => {
  const repos = [
    {
      id: 1,
      link: 'https://github.com/rachel-tj/matricie',
      name: 'Matricies and Discrete Math Library',
      role: 'Cyber Security Engineer . Improving open-source projects, one commit at a time.',
      test: 'Within this repository, you\'ll find a valuable assortment of tools designed to facilitate matrix operations and simplify logical expressions through truth table generation.  There are simple matrix operations as well as finding the inverse, adjugate, and determinant of any square matrix.'
    },
    {
      id: 2,
      link: 'https://github.com/rachel-tj/qube',
      name: 'Rubik\'s Cube: Korf Algorithm',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: 'Here you can explore an efficient algorithm for implementing Richard Korf\'s algoithm for the shortest path to solve a Rubik\'s Cube. Using the IDA* (Iterative Deepening A*) search method, this implementation achieves a layer-12 solution, since I was limited by a lack of GPU resources.',
    },
    {
      id: 3,
      link: 'https://github.com/rachel-tj/senior-projects/puchbot',
      name: 'PuchBot',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'something',
    },
    {
      id: 4,
      link: 'https://github.com/rachel-tj/senior-projects/aplit',
      name: 'Literary Characters Personality Test',
      role: 'Full Stack Developer| PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'This personality assessment that analyzes your traits and behaviors to determine which literary characters you share the most similarities with and the ones you differ from the most. It uses Java combined with linear algebra to determine a compatibility percentage with the user and each character.',
    }
  ];
  return (
    <section id="testmonials">
      <h5>Github</h5>
      <h2>Repositories</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {repos.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsGithub />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Repos