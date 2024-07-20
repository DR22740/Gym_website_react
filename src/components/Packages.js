import React, { useContext } from 'react';
import './Packages.css';
import LanguageContext from './LanguageContext';

const Packages = () => {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div className="packages-page">
      <h1>{t.packagesTitle}</h1>
      <p>{t.packagesDescription}</p>
      <div className="packages">
        <div className="package">
          <h2>{t.package1Title}</h2>
          <ul>
            <li>{t.package1Feature1}</li>
            <li>{t.package1Feature2}</li>
            <li>{t.package1Feature3}</li>
          </ul>
          <button>{t.learnMore}</button>
        </div>
        <div className="package">
          <h2>{t.package2Title}</h2>
          <ul>
            <li>{t.package2Feature1}</li>
            <li>{t.package2Feature2}</li>
            <li>{t.package2Feature3}</li>
          </ul>
          <button>{t.learnMore}</button>
        </div>
        <div className="package">
          <h2>{t.package3Title}</h2>
          <ul>
            <li>{t.package3Feature1}</li>
            <li>{t.package3Feature2}</li>
            <li>{t.package3Feature3}</li>
          </ul>
          <button>{t.learnMore}</button>
        </div>
      </div>
      <div className="comparison-table">
        <h2>{t.comparisonTableTitle}</h2>
        <table>
          <thead>
            <tr>
              <th>{t.feature}</th>
              <th>{t.package1}</th>
              <th>{t.package2}</th>
              <th>{t.package3}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t.feature1}</td>
              <td>{t.package1Feature1}</td>
              <td>{t.package2Feature1}</td>
              <td>{t.package3Feature1}</td>
            </tr>
            <tr>
              <td>{t.feature2}</td>
              <td>{t.package1Feature2}</td>
              <td>{t.package2Feature2}</td>
              <td>{t.package3Feature2}</td>
            </tr>
            <tr>
              <td>{t.feature3}</td>
              <td>{t.package1Feature3}</td>
              <td>{t.package2Feature3}</td>
              <td>{t.package3Feature3}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="testimonials">
        <h2>{t.testimonialsTitle}</h2>
        <div className="testimonial">
          <p>{t.testimonial1}</p>
          <span>{t.testimonialAuthor1}</span>
        </div>
        <div className="testimonial">
          <p>{t.testimonial2}</p>
          <span>{t.testimonialAuthor2}</span>
        </div>
      </div>
      <div className="faqs">
        <h2>{t.faqsTitle}</h2>
        <div className="faq">
          <h3>{t.faqQuestion1}</h3>
          <p>{t.faqAnswer1}</p>
        </div>
        <div className="faq">
          <h3>{t.faqQuestion2}</h3>
          <p>{t.faqAnswer2}</p>
        </div>
      </div>
      <div className="contact-info-big">
        <h2>{t.contactUsTitle}</h2>
        <form>
          <label htmlFor="name">{t.contactName}</label>
          <input type="text" id="name" name="name" placeholder={t.contactName} />
          <label htmlFor="email">{t.contactEmail}</label>
          <input type="email" id="email" name="email" placeholder={t.contactEmail} />
          <label htmlFor="message">{t.contactMessage}</label>
          <textarea id="message" name="message" placeholder={t.contactMessage}></textarea>
          <button type="submit">{t.submit}</button>
        </form>
      </div>
    </div>
  );
};

export default Packages;
