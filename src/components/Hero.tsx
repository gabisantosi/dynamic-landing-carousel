import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarModal from './CalendarModal';

const Hero = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const slides = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&h=900&q=80',
      alt: 'Modern Healthcare Team',
      title: 'heroTitle',
      subtitle: 'heroSubtitle'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&h=900&q=80',
      alt: 'Digital Healthcare Solutions',
      title: 'heroTitle2',
      subtitle: 'heroSubtitle2'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&h=900&q=80',
      alt: 'Healthcare Technology',
      title: 'heroTitle3',
      subtitle: 'heroSubtitle3'
    },
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] overflow-hidden bg-gradient-to-b from-blue-50/80 to-white/90">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative w-full h-full flex-[0_0_100%]">
              <img 
                src={slide.src} 
                alt={slide.alt} 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/60 to-black/60 backdrop-blur-[2px] flex items-center justify-center">
                <div className="text-center max-w-[95%] md:max-w-[90%] lg:max-w-6xl mx-auto px-2 md:px-4 space-y-4 md:space-y-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                    {t(slide.title)}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mx-auto">
                    {t(slide.subtitle)}
                  </p>
                  <Button 
                    size="lg" 
                    onClick={() => setIsCalendarOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-4 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-full"
                  >
                    {t('scheduleDemo')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full z-10 transition-all duration-300"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full z-10 transition-all duration-300"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
      
      <CalendarModal 
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </section>
  );
};

export default Hero;