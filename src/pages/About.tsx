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
              src="https://media.licdn.com/dms/image/D4D03AQFgGUV-kP_qQw/profile-displayphoto-shrink_800_800/0/1708425639460?e=1715817600&v=beta&t=Hs_Hs0Hs_Hs0Hs_Hs0Hs_Hs0Hs_Hs0Hs_Hs0Hs"
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
                  Esta expansão internacional marca um novo capítulo na história da empresa, 
                  possibilitando parcerias estratégicas com instituições de saúde europeias e o 
                  desenvolvimento de projetos que beneficiam tanto o mercado brasileiro quanto o 
                  internacional.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Projetos Internacionais
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nossa presença internacional tem se fortalecido através de projetos inovadores que 
                  conectam diferentes realidades da saúde global. A expertise desenvolvida no Brasil, 
                  combinada com a eficiência dos sistemas de saúde escandinavos, tem permitido à 
                  Kure Saúde criar soluções verdadeiramente globais.
                </p>
                <p>
                  Entre nossos projetos internacionais mais recentes, destacam-se parcerias com 
                  hospitais suecos para implementação de sistemas de telemedicina avançados, 
                  colaborações com startups de healthtech europeias e o desenvolvimento de 
                  plataformas multilíngues que facilitam o intercâmbio de conhecimentos entre 
                  profissionais de saúde de diferentes países.
                </p>
                <p>
                  Nossa visão é continuar expandindo nossa presença global, mantendo o compromisso 
                  com a excelência e inovação que nos trouxe até aqui, sempre buscando criar 
                  soluções que possam beneficiar pacientes e profissionais de saúde em qualquer 
                  parte do mundo.
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