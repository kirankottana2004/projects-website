import React, { useState } from 'react';
import { X, User, Mail, Phone, Building, Eye, EyeOff, CheckCircle } from 'lucide-react';
import './RegisterModal.css';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (validateForm()) {
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        console.log('✅ Registration successful:', data.message);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            password: '',
            confirmPassword: '',
            agreeToTerms: false,
          });
          onClose();
        }, 3000);
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error('❌ Error:', err);
      alert('Something went wrong. Please try again later.');
    }
  }
};


  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Create Your Account</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          {isSubmitted ? (
            <div className="success-message">
              <CheckCircle size={48} className="success-icon" />
              <h3>Registration Successful!</h3>
              <p>Welcome to InTime Projects! We'll send you a confirmation email shortly.</p>
            </div>
          ) : (
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
                  <label htmlFor="firstName">First Name *</label>
                  <div className="input-wrapper">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>

                <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
                  <label htmlFor="lastName">Last Name *</label>
                  <div className="input-wrapper">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className={`form-group ${errors.email ? 'error' : ''}`}>
                <label htmlFor="email">Email Address *</label>
                <div className="input-wrapper">
                  <Mail size={18} className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.phone ? 'error' : ''}`}>
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="input-wrapper">
                    <Phone size={18} className="input-icon" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="company">College (Optional)</label>
                  <div className="input-wrapper">
                    <Building size={18} className="input-icon" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className={`form-group ${errors.password ? 'error' : ''}`}>
                  <label htmlFor="password">Password *</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <div className={`form-group ${errors.confirmPassword ? 'error' : ''}`}>
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>

              <div className={`form-group checkbox-group ${errors.agreeToTerms ? 'error' : ''}`}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                  <span className="checkbox-text">
                    I agree to the <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a> and{' '}
                    <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a> *
                  </span>
                </label>
                {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
              </div>

              <button type="submit" className="btn btn-primary register-submit-btn">
                Create Account
              </button>

              <p className="login-link">
                Already have an account? <a href="#" onClick={(e) => e.preventDefault()}>Sign In</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;