import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { LinkedinIcon } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-[#478EA7] mb-4">
              Kure Saúde
            </h1>
            <div className="w-24 h-1 bg-[#478EA7] mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="relative w-full md:w-1/2 max-w-md group">
              <div className="absolute inset-0 bg-[#478EA7] transform -rotate-6 rounded-lg transition-all duration-300 group-hover:rotate-0"></div>
              <img
                src="https://i.ibb.co/xgPqrxR/claudia-santos-silva.jpg"
                alt="Claudia Silva - CEO"
                className="relative rounded-lg shadow-xl w-full object-cover transition-all duration-500 transform group-hover:scale-105"
                style={{
                  filter: 'grayscale(100%) contrast(1.2) brightness(1.1)',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'none';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%) contrast(1.2) brightness(1.1)';
                }}
              />
            </div>
            
            <div className="space-y-6 md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                Claudia Silva
              </h2>
              <p className="text-2xl text-[#478EA7] font-light mb-4">
                CEO & Fundadora da Kure Saúde
              </p>
              <a 
                href="https://www.linkedin.com/in/claudia-santos-silva/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#478EA7] hover:text-[#3A7A91] bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-full transition-all duration-300"
              >
                <LinkedinIcon size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <Card className="mb-12 overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-6 text-gray-800 border-b border-[#478EA7] pb-4">
                Uma Visão Transformadora para a Saúde Digital
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Com mais de duas décadas de experiência em gestão de projetos e transformação digital, 
                  Claudia Santos Silva tem liderado a revolução na saúde digital brasileira através da 
                  Kure Saúde. Sua jornada começou com um propósito claro: tornar a saúde mais acessível 
                  e eficiente através da tecnologia.
                </p>
                <p>
                  Como CEO e fundadora, Claudia combina sua expertise em gestão de projetos com uma 
                  profunda compreensão das necessidades do setor de saúde. Sua abordagem inovadora tem 
                  sido fundamental para desenvolver soluções que realmente fazem a diferença na vida das pessoas.
                </p>
                <p>
                  Sob sua liderança, a Kure Saúde tem se destacado no mercado de healthtech, implementando 
                  projetos que não apenas melhoram a eficiência operacional, mas também transformam a 
                  experiência do paciente e dos profissionais de saúde.
                </p>
              </div>

              <div className="mt-12 space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-4 text-[#478EA7]">
                    Compromisso com a Excelência
                  </h4>
                <p>
                  A visão de Claudia para a Kure Saúde é baseada em três pilares fundamentais: inovação 
                  tecnológica, excelência em gestão de projetos e foco no cliente. Esta abordagem tem 
                  permitido que a empresa desenvolva soluções que realmente atendem às necessidades do 
                  mercado de saúde.
                </p>
                <p>
                  Sua liderança é marcada por uma combinação única de pensamento estratégico e execução 
                  prática, sempre mantendo o foco em resultados mensuráveis e impacto positivo para todos 
                  os stakeholders envolvidos.
                </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg">
                  <h4 className="text-2xl font-bold mb-4 text-[#478EA7]">
                    Do Rio de Janeiro para o Mundo
                  </h4>
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
