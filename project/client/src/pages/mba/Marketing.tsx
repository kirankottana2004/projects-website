import React, { useState } from 'react';
import './HRM.css';
import { ExternalLink, Github, Eye } from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'Customer Segmentation using K-Means Clustering',
    description: 'Monitor campaign performance, conversion rates, and audience engagement.',
    technologies: ['React', 'Chart.js', 'Tailwind CSS'],
    status: 'completed',
    image: '/images/m1.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Social Media Sentiment Analysis for Brand Monitoring',
    description: 'Analyze keyword rankings, backlinks, and generate site audit reports.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    status: 'in-progress',
    image: '/images/m2.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Marketing Campaign Dashboard with Google Data Studio',
    description: 'Create, schedule, and track bulk email campaigns with templates.',
    technologies: ['React', 'Firebase', 'Styled Components'],
    status: 'planning',
    image: '/images/m3.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Email Campaign Performance Tracker using Mailchimp API',
    description: 'Plan and schedule social posts across platforms with analytics.',
    technologies: ['React', 'Express', 'MySQL'],
    status: 'in-progress',
    image: '/images/m4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'SEO Competitor Analysis Tool',
    description: 'Collect and visualize reviews, ratings, and satisfaction metrics.',
    technologies: ['React', 'Firebase', 'D3.js'],
    status: 'in-progress',
    image: '/images/m5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    title: 'Ad Spend vs Sales Correlation Dashboard in Power BI',
    description: 'Compare conversion rates of different landing page versions.',
    technologies: ['React', 'Next.js', 'MongoDB'],
    status: 'completed',
    image: '/images/m6.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
    {
    id: 7,
    title: 'Influencer Impact Analyzer using Instagram Graph API',
    description: 'Plan and schedule social posts across platforms with analytics.',
    technologies: ['React', 'Express', 'MySQL'],
    status: 'in-progress',
    image: '/images/m4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 8,
    title: 'Customer Feedback Insights with NLP ',
    description: 'Collect and visualize reviews, ratings, and satisfaction metrics.',
    technologies: ['React', 'Firebase', 'D3.js'],
    status: 'in-progress',
    image: '/images/m5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 9,
    title: 'Digital Marketing Strategy Planner Web App',
    description: 'Plan and schedule social posts across platforms with analytics.',
    technologies: ['React', 'Express', 'MySQL'],
    status: 'in-progress',
    image: '/images/m4.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 10,
    title: 'Online Survey System with Real-Time Visualization',
    description: 'Collect and visualize reviews, ratings, and satisfaction metrics.',
    technologies: ['React', 'Firebase', 'D3.js'],
    status: 'in-progress',
    image: '/images/m5.jpg',
    liveUrl: '#',
    githubUrl: '#',
  },

];

const statusOptions = ['All Projects', 'Completed', 'In Progress', 'Planning'];

const Marketing = () => {
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
      <h1 className="page-title">Marketing Projects</h1>
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

export default Marketing;
