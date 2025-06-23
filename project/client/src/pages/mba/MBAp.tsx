import React from 'react';
import './MBAp.css';
import Footer from '../../components/Footer';

const MBAp: React.FC = () => {
  const projects = [
     {
      title: ' Human Resource Management (HR)',
      description:
        'Development of mobile applications tailored for enterprise resource and service management.',
      technologies: ['Flutter', 'React Native', 'Android Studio'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/mba/HRM'  

    },
      {
      title:  'Finance',
      description:
        'Development of mobile applications tailored for enterprise resource and service management.',
      technologies: ['Flutter', 'React Native', 'Android Studio'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/mba/HRM'  
    },
      {
      title: ' Marketing',
      description:
        'Development of mobile applications tailored for enterprise resource and service management.',
      technologies: ['Flutter', 'React Native', 'Android Studio'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/mba/HRM'  
    }

  ];

  return (
    <>
      <div className="mbap-page">
        <nav className="breadcrumb">
        </nav>

        <h1 className="title">MBA Technologies</h1>
        <p className="subtitle">
          Explore various technology domains and related projects in the MBA curriculum.
        </p>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span className="tag" key={i}>{tech}</span>
                ))}
              </div>
              <div className="details">
                <span className="level" style={{ backgroundColor: project.levelColor }}>
                  {project.level}
                </span>
                  <a className="duration" href={project.link}>View More Projects</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MBAp;
