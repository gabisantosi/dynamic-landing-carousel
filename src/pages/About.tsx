import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#478EA7] mb-8 text-center">
            {t('about')}
          </h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <img
              src="https://i.ibb.co/xgPqrxR/claudia-santos-silva.jpg"
              alt="Claudia Santos Silva - CEO"
              className="rounded-lg shadow-lg w-full md:w-1/2 max-w-md object-cover"
            />
            
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Claudia Santos Silva
              </h2>
              <p className="text-xl text-gray-600 font-light">
                CEO & Fundadora da Kure Saúde
              </p>
              <a 
                href="https://www.linkedin.com/in/claudia-santos-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#478EA7] hover:text-[#3A7A91] flex items-center gap-2"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Do Rio de Janeiro para o Mundo
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fundada no Rio de Janeiro, Brasil, a Kure Saúde nasceu com uma visão clara de 
                  transformar a saúde digital brasileira. Sob a liderança visionária de Claudia Santos Silva, 
                  a empresa rapidamente se estabeleceu como referência no mercado nacional e agora está 
                  expandindo suas operações internacionalmente, com foco inicial no mercado europeu.
                </p>
                <p>
                  Com a recente mudança estratégica da CEO para a Suécia, a Kure Saúde está 
                  estabelecendo uma forte presença no mercado escandinavo, trazendo soluções inovadoras 
                  que combinam a experiência brasileira em saúde digital com as melhores práticas do 
                  sistema de saúde nórdico.
                </p>
                <p>
                  Nossa expansão internacional marca um momento significativo para a empresa. Com escritórios
                  no Brasil e na Suécia, estamos construindo pontes entre diferentes culturas e sistemas de saúde,
                  criando soluções que beneficiam tanto o mercado latino-americano quanto o europeu. Esta
                  presença global nos permite compartilhar conhecimentos, tecnologias e melhores práticas,
                  fortalecendo nossa missão de transformar a saúde digital em escala global.
                </p>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;