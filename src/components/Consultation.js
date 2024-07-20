import React, { useContext } from 'react';
import './Consultation.css';
import LanguageContext from './LanguageContext';

const Consultation = () => {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="consultation">
      <div className="container">
        <h1>{t.consultationTitle}</h1>
        <section className="intro">
          <h2>{t.consultationIntroTitle}</h2>
          <p>{t.consultationIntroText}</p>
        </section>
        <section className="types">
          <h2>{t.consultationTypesTitle}</h2>
          <div className="type">
            <h3>{t.consultationType1Title}</h3>
            <p>{t.consultationType1Text}</p>
          </div>
          <div className="type">
            <h3>{t.consultationType2Title}</h3>
            <p>{t.consultationType2Text}</p>
          </div>
          <div className="type">
            <h3>{t.consultationType3Title}</h3>
            <p>{t.consultationType3Text}</p>
          </div>
        </section>
        <section className="booking">
          <h2>{t.consultationBookingTitle}</h2>
          <form>
            <input type="text" placeholder={t.namePlaceholder} />
            <input type="email" placeholder={t.emailPlaceholder} />
            <input type="text" placeholder={t.phonePlaceholder} />
            <textarea placeholder={t.messagePlaceholder}></textarea>
            <button type="submit">{t.bookNow}</button>
          </form>
        </section>
        <section className="profiles">
          <h2>{t.consultantProfilesTitle}</h2>
          <div className="profile">
            <h3>{t.consultantName1}</h3>
            <p>{t.consultantBio1}</p>
          </div>
          <div className="profile">
            <h3>{t.consultantName2}</h3>
            <p>{t.consultantBio2}</p>
          </div>
          <div className="profile">
            <h3>{t.consultantName3}</h3>
            <p>{t.consultantBio3}</p>
          </div>
        </section>
        <section className="success-stories">
          <h2>{t.successStoriesTitle}</h2>
          <div className="story">
            <p>{t.successStory1}</p>
          </div>
          <div className="story">
            <p>{t.successStory2}</p>
          </div>
          <div className="story">
            <p>{t.successStory3}</p>
          </div>
        </section>
        <section className="faq">
          <h2>{t.faqTitle}</h2>
          <div className="faq-item">
            <h3>{t.faqQuestion1_1}</h3>
            <p>{t.faqAnswer1_1}</p>
          </div>
          <div className="faq-item">
            <h3>{t.faqQuestion2_2}</h3>
            <p>{t.faqAnswer2_2}</p>
          </div>
          <div className="faq-item">
            <h3>{t.faqQuestion3}</h3>
            <p>{t.faqAnswer3}</p>
          </div>
        </section>
        <section className="contact-info">
          <h2>{t.contactInfoTitle}</h2>
          <p>{t.contactInfoText}</p>
        </section>
      </div>
    </div>
  );
};

export default Consultation;
