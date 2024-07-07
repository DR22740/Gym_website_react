import React, { useState } from 'react';
import './MainContent.css';
import Header from './Header';
import Footer from './Footer'; // Import Footer
import PlanModal from './PlanModal';

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className="main-content">
      <section id="intro" className="intro">
        <h1 className="metallic-text">START YOUR FITNESS JOURNEY NOW! PICK ANY PLAN THAT FITS YOUR LIFE</h1>
        <p className="metallic-text">Level up your fitness and health journey with personalized training, fitness technology, and dietitian services.</p>
        <button className="cta-button" onClick={handleShowModal}>BOOK A PLAN!</button>
        <div className="stats">
          <div className="metallic-text">20+ Years of Experience</div>
          <div className="metallic-text">100K+ Members Joined</div>
          <div className="metallic-text">99K+ Annual Users</div>
        </div>
      </section>
      <section id="form-section" className="form-section">
        <h2 className="metallic-text">LET'S START LIFE TRAINING NOW</h2>
        <form>
          <input type="text" placeholder="First and last name" />
          <input type="text" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
          <button type="submit">JOIN NOW!</button>
        </form>
        <div className="gym-info">
          <div>GYM 1: Address: GymRoad 24A - Postal Code</div>
          <div>GYM 2: Address: GymRoad 24A - Postal Code</div>
          <div>GYM 3: Address: GymRoad 24A - Postal Code</div>
        </div>
      </section>
      <section id="why-choose-us" className="why-choose-us">
        <h2>WHY CHOOSE US</h2>
        <div className="reasons">
          <div className="reason">
            <h3>01</h3>
            <p>MOBILE TEAM</p>
            <p>We bring our trainers, workout technology and equipment to you, making every workout private, customized and convenient</p>
          </div>
          <div className="reason">
            <h3>02</h3>
            <p>BESPOKE EXPERIENCE</p>
            <p>We make every workout fun, goal-oriented and customized for your age, fitness level, health condition, or group size</p>
          </div>
          <div className="reason">
            <h3>03</h3>
            <p>ADVANCED TECHNOLOGY</p>
            <p>We enable you to experience fitness and health results that go beyond the scale and mirror with our 3D body visualization technology</p>
          </div>
          <div className="reason">
            <h3>04</h3>
            <p>SATISFACTION GUARANTEED</p>
            <p>Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
          </div>
        </div>
      </section>
      <section id="our-team" className="our-team">
        <h2>OUR PROFESSIONAL TRAINERS</h2>
        <p>Whether you're looking to set up a home gym or enhance your current workout routine, our professional trainers are here to help you reach your fitness goals.</p>
        <div className="trainers">
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">TRAINER_NAME</p>
            <p className="trainer-role">Role Trainer</p>
            <p className="trainer-rating">★★★★★</p>
          </div>
    
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">TRAINER_NAME</p>
            <p className="trainer-role">Role Trainer</p>
            <p className="trainer-rating">★★★★★</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">TRAINER_NAME</p>
            <p className="trainer-role">Role Trainer</p>
            <p className="trainer-rating">★★★★★</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">TRAINER_NAME</p>
            <p className="trainer-role">Role Trainer</p>
            <p className="trainer-rating">★★★★★</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">TRAINER_NAME</p>
            <p className="trainer-role">Role Trainer</p>
            <p className="trainer-rating">★★★★★</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">TRAINER_NAME</p>
            <p className="trainer-role">Role Trainer</p>
            <p className="trainer-rating">★★★★★</p>
          </div>
        </div>
      </section>
      <PlanModal show={showModal} handleClose={handleCloseModal} />
    </main>
  );
};

export default MainContent;
