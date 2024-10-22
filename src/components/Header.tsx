import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getLanguageFlag = (lang: string) => {
    switch (lang) {
      case 'pt':
        return '/images/flags/brazil.png';
      case 'sv':
        return '/images/flags/sweden.png';
      case 'en':
      default:
        return '/images/flags/uk.png';
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://i.ibb.co/FBXpxxw/logo.png" alt="Kure saúde" className="h-10 w-auto" />
          <span className="text-xl font-semibold text-[#478EA7]">Kure Saúde</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-[#478EA7]">{t('home')}</Link>
          <Link to="/about" className="text-gray-600 hover:text-[#478EA7]">{t('about')}</Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#478EA7]">{t('contact')}</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center">
                <img src={getLanguageFlag(i18n.language)} alt={i18n.language} className="w-5 h-5 mr-2" />
                <span>{i18n.language.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                <img src="/images/flags/uk.png" alt="EN" className="w-5 h-5 mr-2" /> EN
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('pt')}>
                <img src="/images/flags/brazil.png" alt="PT" className="w-5 h-5 mr-2" /> PT
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('sv')}>
                <img src="/images/flags/sweden.png" alt="SV" className="w-5 h-5 mr-2" /> SV
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/" className="text-gray-600 hover:text-[#478EA7]">{t('home')}</Link>
            <Link to="/about" className="text-gray-600 hover:text-[#478EA7]">{t('about')}</Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#478EA7]">{t('contact')}</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;