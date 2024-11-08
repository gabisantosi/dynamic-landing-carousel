import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, Flag, ImageIcon, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FlagImage = ({ lang }: { lang: string }) => {
  const [flagImageError, setFlagImageError] = React.useState(false);

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

const Logo = () => {
  const [imageError, setImageError] = React.useState(false);

  if (imageError) {
    return (
      <div className="h-10 w-10 bg-gray-100 rounded flex items-center justify-center">
        <ImageIcon className="h-6 w-6 text-gray-400" />
      </div>
    );
  }

  return (
    <img
      src="https://i.ibb.co/TH1yvv8/kure-logo.png"
      alt="Kure saúde"
      className="h-10 w-auto"
      onError={() => setImageError(true)}
    />
  );
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const emailAddresses = 'gabrielasilva@kuresaude.com,claudiasilva@kuresaude.com';
  const emailSubject = 'Contato via Site Kure Saúde';

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-xl font-semibold text-primary">Kure Saúde</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">{t('home')}</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">{t('about')}</Link>
          <Link to="/cases" className="text-foreground hover:text-primary transition-colors">Cases</Link>
          <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
          <Link to="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
          <a 
            href={`mailto:${emailAddresses}?subject=${encodeURIComponent(emailSubject)}`}
            className="text-foreground hover:text-primary transition-colors"
          >
            {t('contact')}
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
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
            <Link to="/" className="text-foreground hover:text-primary transition-colors">{t('home')}</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">{t('about')}</Link>
            <Link to="/cases" className="text-foreground hover:text-primary transition-colors">Cases</Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</Link>
            <a 
              href={`mailto:${emailAddresses}?subject=${encodeURIComponent(emailSubject)}`}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t('contact')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;