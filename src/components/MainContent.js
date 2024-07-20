import React, { useState, useContext } from 'react';
import './MainContent.css';
import PlanModal from './PlanModal';
import LanguageContext from './LanguageContext';

const MainContent = () => {
  const [showModal, setShowModal] = useState(false);
  const { language, translations } = useContext(LanguageContext);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const t = translations[language];

  return (
    <main className="main-content">
      <section id="intro" className="intro">
        <h1 className="metallic-text">{t.startJourney}</h1>
        <p className="metallic-text">{t.levelUp}</p>
        <button className="cta-button" onClick={handleShowModal}>{t.bookPlan}</button>
        <div className="stats">
          <div className="metallic-text">{t.yearsExperience}</div>
          <div className="metallic-text">{t.membersJoined}</div>
          <div className="metallic-text">{t.annualUsers}</div>
        </div>
      </section>
      <section id="form-section" className="form-section">
        <h2 className="metallic-text">{t.signUpTitle}</h2>
        <form>
          <input type="text" placeholder={t.signUpName} />
          <input type="text" placeholder={t.signUpPhone} />
          <input type="email" placeholder={t.signUpEmail} />
          <button type="submit">{t.joinNow}</button>
        </form>
        <div className="gym-info">
          <div>{t.gymInfo1}</div>
          <div>{t.gymInfo2}</div>
          <div>{t.gymInfo3}</div>
        </div>
      </section>
      <section id="why-choose-us" className="why-choose-us">
        <h2>{t.whyChooseUs}</h2>
        <div className="reasons">
          <div className="reason">
            <h3>01</h3>
            <p>{t.mobileTeam}</p>
            <p>We bring our trainers, workout technology and equipment to you, making every workout private, customized and convenient</p>
          </div>
          <div className="reason">
            <h3>02</h3>
            <p>{t.bespokeExperience}</p>
            <p>We make every workout fun, goal-oriented and customized for your age, fitness level, health condition, or group size</p>
          </div>
          <div className="reason">
            <h3>03</h3>
            <p>{t.advancedTechnology}</p>
            <p>We enable you to experience fitness and health results that go beyond the scale and mirror with our 3D body visualization technology</p>
          </div>
          <div className="reason">
            <h3>04</h3>
            <p>{t.satisfactionGuaranteed}</p>
            <p>Our gyms offer personalized training sessions with certified personal trainers who create customized workout plans based on individual goals</p>
          </div>
        </div>
      </section>
      <section id="our-team" className="our-team">
        <h2>{t.professionalTrainers}</h2>
        <p>{t.trainerBio}</p>
        <div className="trainers">
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">{t.trainerName}</p>
            <p className="trainer-role">{t.trainerRole}</p>
            <p className="trainer-rating">{t.trainerRating}</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">{t.trainerName}</p>
            <p className="trainer-role">{t.trainerRole}</p>
            <p className="trainer-rating">{t.trainerRating}</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">{t.trainerName}</p>
            <p className="trainer-role">{t.trainerRole}</p>
            <p className="trainer-rating">{t.trainerRating}</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">{t.trainerName}</p>
            <p className="trainer-role">{t.trainerRole}</p>
            <p className="trainer-rating">{t.trainerRating}</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">{t.trainerName}</p>
            <p className="trainer-role">{t.trainerRole}</p>
            <p className="trainer-rating">{t.trainerRating}</p>
          </div>
          <div className="trainer">
            <div className="trainer-photo"></div>
            <p className="trainer-name">{t.trainerName}</p>
            <p className="trainer-role">{t.trainerRole}</p>
            <p className="trainer-rating">{t.trainerRating}</p>
          </div>
        </div>
      </section>
      <PlanModal show={showModal} handleClose={handleCloseModal} />
    </main>
  );
};

export default MainContent;
