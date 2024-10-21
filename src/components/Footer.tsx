import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('aboutUs')}</h3>
            <p className="text-gray-300">{t('footerAbout')}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">{t('home')}</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">{t('about')}</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactUs')}</h3>
            <p className="text-gray-300">contact@kuresaude.com</p>
            <p className="text-gray-300">+1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Kure saúde. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;