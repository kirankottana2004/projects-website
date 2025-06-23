import React, { useState } from 'react';
import './Webdevelopment.css';
import { ExternalLink, Github, Eye } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Resume Builder Web App Hosted on AWS EC2',
    description: 'Stream video/audio from S3 using CloudFront and secure tokens.',
    technologies: ['React', 'AWS S3', 'CloudFront', 'JWT'],
    status: 'completed',
    image: '/images/cloud1.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Realtime Chat App with Firebase Hosting',
    description: 'Secure login, signup, and role-based access control.',
    technologies: ['React', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
    status: 'in-progress',
    image: '/images/cloud2.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'E-Commerce Admin Dashboard on GCP',
    description: 'API gateway using AWS AppSync with GraphQL and Cognito.',
    technologies: ['React', 'AWS AppSync', 'GraphQL', 'Cognito'],
    status: 'planning',
    image: '/images/cloud3.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Image Uploader with AWS S3 Integration',
    description: 'Track AWS, Azure, and GCP billing data with visual insights.',
    technologies: ['React', 'Chart.js', 'AWS Cost Explorer API'],
    status: 'in-progress',
    image: '/images/cloud4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Online Polling System with Azure Functions',
    description: 'Trigger builds, monitor deployments using Jenkins on AWS.',
    technologies: ['React', 'Jenkins', 'Docker', 'AWS EC2'],
    status: 'in-progress',
    image: '/images/cloud5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Student Result Viewer with Firebase Authentication',
    description: 'Real-time health data sync using MQTT and Google Cloud IoT.',
    technologies: ['React', 'GCP IoT Core', 'MQTT', 'BigQuery'],
    status: 'completed',
    image: '/images/cloud6.jpg',
    liveUrl: '#',
    githubUrl: '#',
  }
];

const statusOptions = ['All Projects', 'Completed', 'In Progress', 'Planning'];

const Cloudtech = () => {
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
      <h1 className="page-title">Cloud Technology Projects</h1>
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

export default Cloudtech;
