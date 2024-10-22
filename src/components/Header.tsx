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
        return '🇧🇷';
      case 'sv':
        return '🇸🇪';
      case 'en':
      default:
        return '🇬🇧';
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://i.ibb.co/FBXpxxw/logo.png" alt="Kure saúde" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">{t('home')}</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">{t('about')}</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">{t('contact')}</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {getLanguageFlag(i18n.language)} {t('language')}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                🇬🇧 English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('pt')}>
                🇧🇷 Português
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('sv')}>
                🇸🇪 Svenska
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/" className="text-gray-600 hover:text-blue-600">{t('home')}</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">{t('about')}</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">{t('contact')}</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  {getLanguageFlag(i18n.language)} {t('language')}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  🇬🇧 English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('pt')}>
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('sv')}>
                  🇸🇪 Svenska
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;