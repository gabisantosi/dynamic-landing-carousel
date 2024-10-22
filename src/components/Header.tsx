import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Flag } from 'lucide-react';
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
        return 'https://cdn.pixabay.com/photo/2012/04/10/23/01/brazil-26584_1280.png';
      case 'sv':
        return 'https://cdn.pixabay.com/photo/2012/04/10/23/03/sweden-26881_1280.png';
      case 'en':
      default:
        return 'https://cdn.pixabay.com/photo/2012/04/10/16/22/united-26177_1280.png';
    }
  };

  const FlagImage = ({ lang }: { lang: string }) => (
    <img
      src={getLanguageFlag(lang)}
      alt={lang.toUpperCase()}
      className="w-5 h-5 mr-2"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
  );

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
                <FlagImage lang={i18n.language} />
                <Flag className="w-5 h-5 mr-2 hidden" />
                <span>{i18n.language.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                <FlagImage lang="en" />
                <Flag className="w-5 h-5 mr-2 hidden" /> EN
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('pt')}>
                <FlagImage lang="pt" />
                <Flag className="w-5 h-5 mr-2 hidden" /> PT
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('sv')}>
                <FlagImage lang="sv" />
                <Flag className="w-5 h-5 mr-2 hidden" /> SV
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