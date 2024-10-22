import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Hero = () => {
  const { t } = useTranslation();

  const images = [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80',
    'https://images.unsplash.com/photo-1583912267550-d6c2a3a8e5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80',
  ];

  return (
    <section className="relative h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="relative w-full h-full">
                <img 
                  src={image} 
                  alt={`Digital Health Consulting ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('heroTitle')}</h1>
                    <p className="text-xl md:text-2xl mb-8">{t('heroSubtitle')}</p>
                    <Button size="lg" onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}>
                      {t('scheduleDemo')}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Hero;