import React, { useState } from 'react';
import './Webdevelopment.css';
import { ExternalLink, Github, Eye } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Library Management System using MySQL',
    description: 'Admin panel with real-time analytics and inventory tracking.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', '+2 more'],
    status: 'completed',
    image: '/images/p.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Online Retail Dashboard ',
    description: 'Team task tracking app with deadlines and Kanban board.',
    technologies: ['React', 'Node.js', 'MongoDB', '+2 more'],
    status: 'in-progress',
    image: '/images/p1.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Customer Feedback System using MongoDB',
    description: 'Forecasts with interactive maps and OpenWeather API.',
    technologies: ['React', 'OpenWeather API', 'Styled Components', '+1 more'],
    status: 'planning',
    image: '/images/p2.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Food Ordering App Backend using Firebase',
    description: 'Dashboard to analyze reach, likes, engagement, and growth.',
    technologies: ['React', 'D3.js', 'Node.js'],
    status: 'in-progress',
    image: '/images/p3.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Bookstore Inventory System using SQLite',
    description: 'Track courses, students, exams, and performance metrics.',
    technologies: ['React', 'Firebase', 'Chart.js'],
    status: 'in-progress',
    image: '/images/p4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Banking System Simulation using Oracle DB',
    description: 'Job board with resume upload, filters, and application tracking.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'completed',
    image: '/images/p5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  }
];

const statusOptions = ['All Projects', 'Completed', 'In Progress', 'Planning'];

const Database= () => {
  const [selectedStatus, setSelectedStatus] = useState('All Projects');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = allProjects.filter((project) => {
    const matchesStatus =
      selectedStatus === 'All Projects' ||
      project.status.toLowerCase() === selectedStatus.toLowerCase().replace(' ', '-');
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="webdev-page">
      <div className="filters">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="tabs">
          {statusOptions.map((status) => (
            <button
              key={status}
              className={selectedStatus === status ? 'active' : ''}
              onClick={() => setSelectedStatus(status)}
            >
              {status}
              {status !== 'All Projects' && (
                <span className="count">
                  {
                    allProjects.filter(
                      (p) =>
                        p.status.toLowerCase() ===
                        status.toLowerCase().replace(' ', '-')
                    ).length
                  }
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="card-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="card-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tags">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="actions">
                <button><Eye size={14} /> View</button>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} />
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Database;
