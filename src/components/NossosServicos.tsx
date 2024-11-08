import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const NossosServicos = () => {
  const servicos = [
    {
      icon: Stethoscope,
      title: 'Consultoria em Saúde Digital',
      description: 'Auxiliamos organizações de saúde na transformação digital, implementação de tecnologias e otimização de processos para melhorar a experiência do paciente e a eficiência operacional.'
    },
    {
      icon: GraduationCap,
      title: 'Educação de Produto',
      description: 'Capacitação e treinamento em gestão de produtos digitais na área da saúde, focando em metodologias ágeis, design thinking e desenvolvimento centrado no usuário.'
    },
    {
      icon: Briefcase,
      title: 'Gestão de Projetos em Saúde',
      description: 'Gerenciamento especializado de projetos na área da saúde, utilizando metodologias ágeis e tradicionais para garantir a entrega eficiente de soluções digitais.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-[#478EA7]/10 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nossos Serviços Especializados
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white bg-opacity-80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#478EA7]/20 rounded-full flex items-center justify-center mb-4">
                    <servico.icon className="w-8 h-8 text-[#478EA7]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{servico.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{servico.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NossosServicos;