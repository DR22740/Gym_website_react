import React, { useContext } from 'react';
import './JoinTeam.css';
import LanguageContext from './LanguageContext';

const JoinTeam = () => {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="join-team">
      <div className="container">
        <h1>{t.joinTeamTitle}</h1>
        <section className="intro">
          <h2>{t.joinIntroTitle}</h2>
          <p>{t.joinIntroText}</p>
        </section>
        <section className="benefits">
          <h2>{t.joinBenefitsTitle}</h2>
          <ul>
            <li>{t.joinBenefit1}</li>
            <li>{t.joinBenefit2}</li>
            <li>{t.joinBenefit3}</li>
          </ul>
        </section>
        <section className="open-positions">
          <h2>{t.openPositionsTitle}</h2>
          <div className="position">
            <h3>{t.position1Title}</h3>
            <p>{t.position1Description}</p>
            <button className="btn-apply">{t.applyNow}</button>
          </div>
          <div className="position">
            <h3>{t.position2Title}</h3>
            <p>{t.position2Description}</p>
            <button className="btn-apply">{t.applyNow}</button>
          </div>
          <div className="position">
            <h3>{t.position3Title}</h3>
            <p>{t.position3Description}</p>
            <button className="btn-apply">{t.applyNow}</button>
          </div>
        </section>
        <section className="apply">
          <h2>{t.applyTitle}</h2>
          <form>
            <input type="text" placeholder={t.namePlaceholder} />
            <input type="email" placeholder={t.emailPlaceholder} />
            <input type="text" placeholder={t.phonePlaceholder} />
            <textarea placeholder={t.coverLetterPlaceholder}></textarea>
            <button type="submit">{t.submitApplication}</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default JoinTeam;
