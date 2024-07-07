import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './PlanModal.css';

const ServicesModal = ({ show, handleClose }) => {
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
        <h1>OUR SERVICES</h1>
        <div className="plans">
          <div className="plan">
            <h2>1 MONTH SUBSCRIPTION</h2>
            <p>30 DAYS OF UNLIMITED GYM USE</p>
            <p>NO TRAINER</p>
            <button>Learn More</button>
          </div>
          <div className="plan best-offer">
            <h2>1 MONTH SUBSCRIPTION + TRAINER</h2>
            <p>Personal trainer</p>
            <p>Scheduled workouts based on your preference</p>
            <button>Learn More</button>
          </div>
          <div className="plan">
            <h2>6 MONTHS SUB</h2>
            <p>No coach</p>
            <p>Unlimited use of the gym</p>
            <p>Special deals</p>
            <button>Learn More</button>
          </div>
        </div>
        <button className="close-button" onClick={handleClose}>Close</button>
      </animated.div>
    </div>
  );
};

export default ServicesModal;
