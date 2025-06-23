import React from 'react';
import './Services.css';
import { Briefcase, Code, GraduationCap, Users, Trophy, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const programs = [
    {
      title: 'BTech',
      subtitle: 'Bachelor of Technology',
      students: '800+',
      placement: '90%',
      bgColor: '#f0e6ff',     
      borderColor: '#cc66ff',
      icon: <GraduationCap size={32} color="#cc66ff" />,
      btnColor: '#a54ce1',
      route: '/projects/btech'
    },

    {
      title: 'MCA',
      subtitle: 'Master of Computer Applications',
      students: '350+',
      placement: '92%',
      bgColor: '#e6fff0',
      borderColor: '#00cc66',
      icon: <Code size={32} color="#00cc66" />,
      btnColor: '#00a94f',
      route: '/projects/mca'
    },
    {
      title: 'MBA',
      subtitle: 'Master of Business Administration',
      students: '500+',
      placement: '95%',
      bgColor: '#e6f0ff',
      borderColor: '#4d94ff',
      icon: <Briefcase size={32} color="#4d94ff" />,
      btnColor: '#1a73e8',
      route: '/projects/mba'
    }
  ];

  return (
    <section className="services-section" id='services'>
      <h2>Choose Your Academic Journey</h2>
      <p className="subtitle">
        Explore our premium programs designed to shape tomorrow's leaders and innovators
      </p>
      <div className="cards-container">
        {programs.map((prog, index) => (
          <div key={index} className="service-card" style={{ backgroundColor: prog.bgColor, borderColor: prog.borderColor }}>
            <div className="icon-wrapper">{prog.icon}</div>
            <h3>{prog.title}</h3>
            <p className="subtitle">{prog.subtitle}</p>
            <div className="stats">
              <div className="stat">
                <Users size={18} />
                <div>
                  <strong>{prog.students}</strong>
                  <span>Students</span>
                </div>
              </div>
              <div className="stat">
                <Trophy size={18} />
                <div>
                  <strong>{prog.placement}</strong>
                  <span>Placement</span>
                </div>
              </div>
            </div>
            <button
              className="add-btn"
              style={{ backgroundColor: prog.btnColor }}
              onClick={() => navigate(prog.route)}
            >
              <Plus size={16} />
              &nbsp; Explore Projects
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
