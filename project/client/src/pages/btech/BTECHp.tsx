import React from 'react';
import './BTECHp.css';
import Footer from '../../components/Footer';

const BTECHp: React.FC = () => {
  const projects = [
    {
      title: 'Web Development',
      description:
        'Build responsive websites and modern web apps using HTML, CSS, JavaScript, and frameworks like React and Angular.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      level: 'Advanced',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/Webdevelopment'  

    },
    {
      title: 'AI, ML & Data Science',
      description:
        'Develop models using Python libraries to solve real-world problems in classification, prediction, and analytics.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      level: 'Advanced',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/AIandMLandDatascience'  
    },
    {
      title: 'Databases',
      description:
        'Design and manage relational and non-relational databases using SQL, MongoDB, and database optimization techniques.',
      technologies: ['MySQL', 'MongoDB', 'PostgreSQL'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/Databases'  

    },
    {
      title: 'Mobile App Development',
      description:
        'Build native and cross-platform mobile apps using Java, Kotlin, or frameworks like Flutter and React Native.',
      technologies: ['Flutter', 'React Native', 'Kotlin', 'Java'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/AppDevelopment'
    },
    {
      title: 'Cloud & DevOps',
      description:
        'Automate deployment, CI/CD, and use cloud platforms like AWS and Azure for scalable infrastructure.',
      technologies: ['AWS', 'Azure', 'Docker', 'Jenkins'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/CloudandDevops'
    },
    {
      title: 'Software Tools & IDEs',
      description:
        'Work with essential tools like Git, VSCode, Eclipse, and debugging utilities for software development.',
      technologies: ['Git', 'VSCode', 'Eclipse', 'Postman'],
      level: 'Basic',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/Softwaretools'
    },
    {
      title: 'Cyber Security',
      description:
        'Understand security principles, ethical hacking, and implement secure coding and encryption techniques.',
      technologies: ['Wireshark', 'Kali Linux', 'Python'],
      level: 'Intermediate',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/Cybersecurity'
    },
    {
      title: 'Electronics',
      description:
        'Design basic circuits and embedded systems using microcontrollers, sensors, and PCB design tools.',
      technologies: ['Arduino', 'Raspberry Pi', 'Proteus'],
      level: 'Basic',
      levelColor: 'hwb(120 41% 30%)',
      link: '/projects/btech/Electronics'
    }
  ];

  return (
    <>
      <div className="mbap-page">
        <nav className="breadcrumb"></nav>

        <h1 className="title">Projects for BTech</h1>
        <p className="subtitle">
          Real-world technical projects categorized by current industry technologies
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

export default BTECHp;
