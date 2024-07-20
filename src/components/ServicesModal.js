import React, { useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './PlanModal.css';
import LanguageContext from './LanguageContext';

const ServicesModal = ({ show, handleClose }) => {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];

  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0)` : `translateY(-100%)`,
    config: { duration: 500 }
  });

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <animated.div className="modal-content" style={animation} onClick={e => e.stopPropagation()}>
        <h1>{t.ourServices}</h1>
        <div className="plans">
          <div className="plan">
            <h2>{t.oneMonthSubscription}</h2>
            <p>{t.thirtyDaysUnlimitedGym}</p>
            <p>{t.noTrainer}</p>
            <button>{t.learnMore}</button>
          </div>
          <div className="plan best-offer">
            <h2>{t.oneMonthSubscriptionTrainer}</h2>
            <p>{t.personalTrainer}</p>
            <p>{t.scheduledWorkouts}</p>
            <button>{t.learnMore}</button>
          </div>
          <div className="plan">
            <h2>{t.sixMonthsSub}</h2>
            <p>{t.noCoach}</p>
            <p>{t.unlimitedUseGym}</p>
            <p>{t.specialDeals}</p>
            <button>{t.learnMore}</button>
          </div>
        </div>
        <button className="close-button" onClick={handleClose}>{t.close}</button>
      </animated.div>
    </div>
  );
};

export default ServicesModal;
