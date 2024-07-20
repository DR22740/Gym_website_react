import React, { useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './PlanModal.css';
import LanguageContext from './LanguageContext';

const PlanModal = ({ show, handleClose }) => {
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
        <h1>{t.choosePlan}</h1>
        <div className="plans">
          <div className="plan">
            <h2>{t.level1}</h2>
            <p>{t.price}</p>
            <ul>
              <li>{t.regularPackageAccess}</li>
              <li>{t.yourPlanChoice}</li>
              <li>{t.fullWeekAccess}</li>
            </ul>
            <button>{t.choose}</button>
          </div>
          <div className="plan">
            <h2>{t.level2}</h2>
            <p>{t.price}</p>
            <ul>
              <li>{t.someGymSupplies}</li>
              <li>{t.personalLocker}</li>
              <li>{t.dietitianConsultation}</li>
              <li>{t.additionalGroupClasses}</li>
              <li>{t.level1StuffIncluded}</li>
            </ul>
            <button>{t.choose}</button>
          </div>
          <div className="plan best-offer">
            <h2>{t.level3}</h2>
            <p>{t.price}</p>
            <ul>
              <li>{t.fullWorkoutSupplies}</li>
              <li>{t.moreAdvancedSessions}</li>
              <li>{t.personalDietPlan}</li>
              <li>{t.unlimitedAccessToAllServices}</li>
              <li>{t.level2Plus1Included}</li>
            </ul>
            <button>{t.choose}</button>
          </div>
        </div>
        <button className="close-button" onClick={handleClose}>{t.close}</button>
      </animated.div>
    </div>
  );
};

export default PlanModal;
