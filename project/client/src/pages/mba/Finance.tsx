import React, { useState } from 'react';
import './HRM.css';
import { ExternalLink, Github, Eye } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Credit Score Classification using Machine Learning',
    description: 'Track employee records, leaves, and department KPIs.',
    technologies: ['React', 'Chart.js', 'Tailwind CSS'],
    status: 'completed',
    image: '/images/hr1.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Personal Finance Tracker Web App',
    description: 'Manage job postings, applications, and interview schedules.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'in-progress',
    image: '/images/hr2.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Financial Dashboard using Excel + Power Query',
    description: 'Automated onboarding flow for new hires with checklist and document uploads.',
    technologies: ['React', 'Firebase', 'Styled Components'],
    status: 'planning',
    image: '/images/hr3.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Cryptocurrency Portfolio Tracker',
    description: '360-degree employee review with feedback and rating tools.',
    technologies: ['React', 'Node.js', 'Express'],
    status: 'in-progress',
    image: '/images/hr4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Loan Default Risk Predictor using Logistic Regression',
    description: 'Calculate salary, deductions, and generate payslips.',
    technologies: ['React', 'MySQL', 'Bootstrap'],
    status: 'completed',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Automated Budget Allocation System for SMEs',
    description: 'Collect and visualize employee satisfaction feedback.',
    technologies: ['React', 'D3.js', 'Firebase'],
    status: 'in-progress',
    image: '/images/hr6.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
    {
    id: 7,
    title: 'Mutual Fund Performance Analysis using Tableau',
    description: '360-degree employee review with feedback and rating tools.',
    technologies: ['React', 'Node.js', 'Express'],
    status: 'in-progress',
    image: '/images/hr4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    title: ' Expense Manager Mobile App ',
    description: 'Calculate salary, deductions, and generate payslips.',
    technologies: ['React', 'MySQL', 'Bootstrap'],
    status: 'completed',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 9,
    title: 'Invoice Automation System using RPA ',
    description: '360-degree employee review with feedback and rating tools.',
    technologies: ['React', 'Node.js', 'Express'],
    status: 'in-progress',
    image: '/images/hr4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 10,
    title: 'Stock Market Analysis and Prediction using Python',
    description: 'Calculate salary, deductions, and generate payslips.',
    technologies: ['React', 'MySQL', 'Bootstrap'],
    status: 'completed',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  }

];

const statusOptions = ['All Projects', 'Completed', 'In Progress', 'Planning'];

const HRM = () => {
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
      <h1 className="page-title">HRM Projects</h1>
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

export default HRM;
