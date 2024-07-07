import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './PlanModal.css';

const PlanModal = ({ show, handleClose }) => {
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
        <h1>CHOOSE YOUR PLAN LEVEL:</h1>
        <div className="plans">
          <div className="plan">
            <h2>LEVEL 1</h2>
            <p>$price</p>
            <ul>
              <li>regular package access</li>
              <li>your plan choice</li>
              <li>full week access</li>
            </ul>
            <button>Choose</button>
          </div>
          <div className="plan">
            <h2>LEVEL 2</h2>
            <p>$price</p>
            <ul>
              <li>some gym supplies</li>
              <li>personal locker</li>
              <li>Dietitian Consultation</li>
              <li>additional group classes</li>
              <li>level 1 stuff included</li>
            </ul>
            <button>Choose</button>
          </div>
          <div className="plan best-offer">
            <h2>LEVEL 3</h2>
            <p>$price</p>
            <ul>
              <li>Full workout supplies</li>
              <li>more advanced sessions</li>
              <li>Personal diet plan</li>
              <li>Unlimited access to all services</li>
              <li>level 2+1 included</li>
            </ul>
            <button>Choose</button>
          </div>
        </div>
        <button className="close-button" onClick={handleClose}>Close</button>
      </animated.div>
    </div>
  );
};

export default PlanModal;
