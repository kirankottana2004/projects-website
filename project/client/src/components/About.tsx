import React from 'react';
import { Users, Award, Clock, TrendingUp, CheckCircle } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const stats = [
    { icon: <Users size={24} />, number: '500+', label: 'Projects Completed' },
    { icon: <Award size={24} />, number: '98%', label: 'Client Satisfaction' },
    { icon: <Clock size={24} />, number: '5+', label: 'Years Experience' },
    { icon: <TrendingUp size={24} />, number: '150+', label: 'Happy Clients' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every project undergoes rigorous testing and quality assurance.',
      icon: <CheckCircle size={24} />
    },
    {
      title: 'On-Time Delivery',
      description: 'Meeting deadlines is our commitment. We plan meticulously to ensure timely project completion.',
      icon: <Clock size={24} />
    },
    {
      title: 'Expert Team',
      description: 'Our team consists of experienced professionals with expertise across multiple technologies.',
      icon: <Users size={24} />
    },
    {
      title: 'Continuous Growth',
      description: 'We stay updated with the latest technologies and methodologies to deliver cutting-edge solutions.',
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text slide-in-left">
            <h2 className="section-title">About Lomaa IT Solutions</h2>
            <p className="about-description">
              Lomaa IT Solutions is a forward-thinking technology company dedicated to delivering innovative digital solutions. 
              As part of our commitment to empowering skill development and practical learning, we've built a specialized platform—Lomaa Skill Projects—
              to showcase real-world, hands-on projects created by our talented team and trainees.
            </p>
            <p className="about-description">
              At Lomaa, we blend technical excellence with a deep understanding of industry needs. 
              Our experienced professionals guide learners and developers alike in building impactful web and mobile applications, 
              data-driven solutions, and modern digital tools. Through Lomaa Skill Projects, we aim to foster a culture of continuous improvement, 
              creativity, and real-world problem solving.
            </p>


            <div className="about-values">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <div className="value-icon">{value.icon}</div>
                  <div className="value-content">
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats slide-in-right">
            <div className="stats-list">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon-box">{stat.icon}</div>
                  <div className="stat-text">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="team-image">
              <div className="team-image">
                <img src="/images/team.png" alt="Our Team" className="team-photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
