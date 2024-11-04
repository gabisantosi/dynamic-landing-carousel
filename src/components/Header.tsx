import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Flag, ImageIcon } from 'lucide-react';
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
  const [imageError, setImageError] = React.useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getLanguageFlag = (lang: string) => {
    switch (lang) {
      case 'pt':
        return 'https://flagcdn.com/w40/br.png';
      case 'sv':
        return 'https://flagcdn.com/w40/se.png';
      case 'en':
      default:
        return 'https://flagcdn.com/w40/gb.png';
    }
  };

  const FlagImage = ({ lang }: { lang: string }) => {
    const [flagImageError, setFlagImageError] = React.useState(false);

    if (flagImageError) {
      return <Flag className="w-5 h-5 mr-2" />;
    }

    return (
      <img
        src={getLanguageFlag(lang)}
        alt={lang.toUpperCase()}
        className="w-5 h-5 mr-2"
        onError={() => setFlagImageError(true)}
      />
    );
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          {imageError ? (
            <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
              <ImageIcon className="h-6 w-6 text-gray-400" />
            </div>
          ) : (
            <img
              src="https://i.ibb.co/TH1yvv8/kure-logo.png"
              alt="Kure saúde"
              className="h-10 w-auto"
              onError={() => setImageError(true)}
            />
          )}
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
                <FlagImage lang={i18n.language} />
                <span>{i18n.language.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                <FlagImage lang="en" /> EN
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('pt')}>
                <FlagImage lang="pt" /> PT
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('sv')}>
                <FlagImage lang="sv" /> SV
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