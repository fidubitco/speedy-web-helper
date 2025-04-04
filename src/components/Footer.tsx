
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { Github, Twitter, Facebook, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  const footerBgClass = isDarkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200';
  const textClass = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const linkClass = isDarkMode ? 'text-gray-300 hover:text-[#FF56BB]' : 'text-gray-700 hover:text-[#FF56BB]';
  const iconClass = `w-5 h-5 ${isDarkMode ? 'text-gray-400 hover:text-[#FF56BB]' : 'text-gray-600 hover:text-[#FF56BB]'}`;
  
  return (
    <footer className={`${footerBgClass} py-10`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className={`font-bold text-xl mb-4 ${textClass}`}>DRACMA</h3>
            <p className={`${textClass} mb-4`}>{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Twitter className={iconClass} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook className={iconClass} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className={iconClass} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className={iconClass} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${textClass}`}>{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={linkClass}>{t('footer.home')}</Link>
              </li>
              <li>
                <Link to="/" className={linkClass}>{t('footer.about')}</Link>
              </li>
              <li>
                <Link to="/" className={linkClass}>{t('footer.tokenomics')}</Link>
              </li>
              <li>
                <Link to="/" className={linkClass}>{t('footer.roadmap')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${textClass}`}>{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={linkClass}>{t('footer.whitepaper')}</Link>
              </li>
              <li>
                <Link to="/" className={linkClass}>{t('footer.faq')}</Link>
              </li>
              <li>
                <Link to="/" className={linkClass}>{t('footer.documentation')}</Link>
              </li>
              <li>
                <Link to="/" className={linkClass}>{t('footer.developers')}</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className={`font-bold text-lg mb-4 ${textClass}`}>{t('footer.contact')}</h3>
            <p className={`${textClass} mb-2`}>contact@dracma.io</p>
            <p className={`${textClass} mb-4`}>{t('footer.address')}</p>
            <div className="flex items-center">
              <Globe className={`w-4 h-4 mr-2 ${textClass}`} />
              <span className={textClass}>dracma.io</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`pt-6 mt-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`${textClass} text-sm mb-4 md:mb-0`}>
              © {currentYear} DRACMA. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-6">
              <Link to="/" className={`${textClass} text-sm hover:text-[#FF56BB]`}>
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/" className={`${textClass} text-sm hover:text-[#FF56BB]`}>
                {t('footer.termsOfService')}
              </Link>
              <Link to="/" className={`${textClass} text-sm hover:text-[#FF56BB]`}>
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
