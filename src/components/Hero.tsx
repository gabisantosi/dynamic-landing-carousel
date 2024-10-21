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
    'https://source.unsplash.com/random/1600x900/?health',
    'https://source.unsplash.com/random/1600x900/?medical',
    'https://source.unsplash.com/random/1600x900/?healthcare',
  ];

  return (
    <section className="relative h-screen">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <div className="relative w-full h-full">
                <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
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