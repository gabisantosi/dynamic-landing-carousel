import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80',
      alt: 'Digital Health Consulting 1'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80',
      alt: 'Digital Health Consulting 2'
    },
    {
      type: 'video',
      src: 'https://player.vimeo.com/external/368763065.sd.mp4?s=13b81d3f1a8757ca8c3d1d5f4d7d9e7f1e194a3e&profile_id=164&oauth2_token_id=57447761',
      alt: 'Digital Health Video'
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80',
      alt: 'Digital Health Consulting 3'
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
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide relative w-full h-full flex-[0_0_100%]">
              {slide.type === 'image' ? (
                <img 
                  src={slide.src} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <video 
                  src={slide.src} 
                  className="w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl px-4">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">Consultoria Especializada em Saúde</h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8">
                    Oferecemos soluções de consultoria personalizada em saúde digital, tecnologia e inovação para otimizar o processo e melhorar a qualidade dos serviços.
                  </p>
                  <Button 
                    size="lg" 
                    onClick={() => window.open('https://calendly.com/your-calendly-link', '_blank')}
                    className="w-full sm:w-auto"
                  >
                    Agende uma consultoria
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6 text-black" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;