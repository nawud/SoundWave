import { useState } from 'react';
import './JoinSection.css';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

const JoinSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header/>
      <section className="join">
        <div className="join__container">
          <div className="join__content">
            <h1 className="join__title">
              Join the <span className="join__highlight">fun.</span>
            </h1>
          </div>
          <div className="join__form-container">
            <form className="join__form" onSubmit={handleSubmit}>
              <div className="join__form-group">
                <label htmlFor="name" className="join__label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="join__input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="join__form-group">
                <label htmlFor="email" className="join__label">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="join__input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="join__form-group">
                <label htmlFor="password" className="join__label">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="join__input"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="join__button">
                Join Now
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default JoinSection;