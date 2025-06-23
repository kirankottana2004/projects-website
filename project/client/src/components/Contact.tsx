import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
        }, 3000);
      } else {
        alert("Failed to send: " + result.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      content: 'hr@lomaait.com ',
     },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      content: '+91 9160903473 , +91 9441590527',
     },
    {
      icon: <MapPin size={24} />,
      title: 'Visit Us',
      content: 'Ushodaya junction, MVP colony, Visakhapatnam, Andhra Pradesh ',
    },
    {
      icon: <Globe size={24} />,
      title: 'Website',
      content: 'www.lomaait.com, www.lomaaskill.com ',
    }

  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your next project? Contact us today!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Discuss Your Project</h3>
            <p>We’re ready to assist with your digital transformation.</p>
            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a key={index} href={info.link} onClick={info.link === '#' ? e => e.preventDefault() : undefined}>
                  <div>{info.icon}</div>
                  <div>
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle size={48} />
                <h3>Message Sent!</h3>
                <p>We’ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className={`form-group ${errors.name ? 'error' : ''}`}>
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span>{errors.name}</span>}
                  </div>
                  <div className={`form-group ${errors.email ? 'error' : ''}`}>
                    <label htmlFor="email">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} />
                </div>
                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                  <label htmlFor="message">Message *</label>
                  <textarea name="message" rows={5} value={formData.message} onChange={handleChange}></textarea>
                  {errors.message && <span>{errors.message}</span>}
                </div>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
