import React, { useContext } from 'react';
import './OurProcess.css';
import LanguageContext from './LanguageContext';

const OurProcess = () => {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="our-process">
      <div className="container">
        <h1 className="process-title">{t.ourProcess}</h1>
        <div className="process-step">
          <h2>{t.initialConsultation}</h2>
          <p>{t.initialConsultationDesc}</p>
        </div>
        <div className="process-step">
          <h2>{t.fitnessAssessment}</h2>
          <p>{t.fitnessAssessmentDesc}</p>
        </div>
        <div className="process-step">
          <h2>{t.customizedPlan}</h2>
          <p>{t.customizedPlanDesc}</p>
        </div>
        <div className="process-step">
          <h2>{t.regularTraining}</h2>
          <p>{t.regularTrainingDesc}</p>
        </div>
        <div className="process-step">
          <h2>{t.progressTracking}</h2>
          <p>{t.progressTrackingDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
