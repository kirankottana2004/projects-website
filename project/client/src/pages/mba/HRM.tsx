import React, { useState } from 'react';
import './HRM.css';
import { ExternalLink, Github, Eye } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Employee Attrition Prediction Using Machine Learning',
    description: 'Manage employee records, departments, leave, and attendance.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'completed',
    image: '/images/hr1.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'HR Analytics Dashboard with Power BI',
    description: 'Track job applications, candidate status, and interview schedules.',
    technologies: ['React', 'Express', 'MySQL'],
    status: 'in-progress',
    image: '/images/hr2.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Resume Screening System using Natural Language Processing',
    description: 'Automate onboarding steps for new employees with checklists and reminders.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    status: 'planning',
    image: '/images/hr3.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Employee Performance Tracking App using Excel VBA',
    description: 'Visualize attrition, hiring trends, and diversity metrics in real time.',
    technologies: ['React', 'D3.js', 'Chart.js'],
    status: 'in-progress',
    image: '/images/hr4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title:'AI Chatbot for HR FAQs and Leave Requests',
    description: 'Generate payslips, track deductions, and manage monthly salaries.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    status: 'in-progress',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Remote Work Productivity Analysis with Tableau',
    description: 'Enable 360-degree feedback and performance evaluation by managers.',
    technologies: ['React', 'Redux', 'Express'],
    status: 'completed',
    image: '/images/hr6.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
    {
    id: 7,
    title:'Employee Engagement Survey Analysis using Google Forms + Data Studio',
    description: 'Generate payslips, track deductions, and manage monthly salaries.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    status: 'in-progress',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    title:'HR Leave Management System ',
    description: 'Generate payslips, track deductions, and manage monthly salaries.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    status: 'in-progress',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 9,
    title:'Recruitment Funnel Optimization with Zoho Recruit',
    description: 'Generate payslips, track deductions, and manage monthly salaries.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    status: 'in-progress',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 10,
    title:'Automation of Onboarding Workflow using Zapier',
    description: 'Generate payslips, track deductions, and manage monthly salaries.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    status: 'in-progress',
    image: '/images/hr5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },

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
