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
              alt="Claudia Silva - CEO"
              className="rounded-lg shadow-lg w-full md:w-1/3 max-w-sm object-cover"
            />
            
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                Claudia Silva
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
                Uma Visão Transformadora para a Saúde Digital
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
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

                <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
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
                <p>
                  Além de sua atuação como CEO, Claudia é uma defensora ativa da transformação digital na 
                  saúde, compartilhando frequentemente seus conhecimentos e experiências em eventos do setor 
                  e contribuindo para o desenvolvimento do ecossistema de healthtech no Brasil.
                </p>

                <h4 className="text-xl font-semibold mt-6 mb-4 text-gray-800">
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
            </CardContent>
          </Card>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default About;