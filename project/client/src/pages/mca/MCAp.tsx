import React from 'react';
import './MCAp.css';
import Footer from '../../components/Footer';

const MCAp: React.FC = () => {
const projects = [
  {
    title: 'Web Development',
    description:
      'Projects in responsive UI/UX, APIs, and full-stack solutions using JavaScript frameworks.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    level: 'Advanced',
    levelColor: 'hwb(120 41% 30%)',
    link: '/projects/mca/Webdevelopment'
  },
  {
    title: 'Data Science & Machine Learning',
    description:
      'Build models, analyze data, and automate predictions using modern ML frameworks.',
    technologies: ['Python', 'Pandas', 'TensorFlow', 'Scikit-Learn'],
    level: 'Advanced',
    levelColor: 'hwb(120 41% 30%)',
    link: '/projects/mca/Datascience'
  },
  {
    title: 'Database Technologies',
    description:
      'Explore relational and NoSQL databases with real-time data processing applications.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
    level: 'Advanced',
    levelColor: 'hwb(120 41% 30%)',
    link: '/projects/mca/Database'  
  },
     {
      title: 'Mobile App Development',
      description:
        'Create cross-platform mobile apps with native performance and interactive UIs.',
      technologies: ['Flutter', 'React Native', 'Firebase'],
      level: 'Advanced',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/mca/Mobileappdevelopment'  


    },
    {
      title: 'Cloud Technologies',
      description:
        'Deploy and scale applications using major cloud platforms and services.',
      technologies: ['AWS', 'Azure', 'Docker'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/mca/Cloudtech'  
    },
    {
      title: 'DevOps & Deployment',
      description:
        'Automate CI/CD pipelines and manage infrastructure using modern DevOps tools.',
      technologies: ['Jenkins', 'GitHub Actions', 'Kubernetes'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/mca/DevopsDeployment'  
    },
  ];

  return (
    <>
      <div className="mbap-page">
        <nav className="breadcrumb"></nav>

        <h1 className="title">MCA Technologies</h1>
        <p className="subtitle">
          Explore various technologies and their related projects for MCA curriculum
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

export default MCAp;
