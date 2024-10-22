import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Cog, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NossosServicos = () => {
  const servicos = [
    {
      icon: Briefcase,
      title: 'Gestão de Projetos',
      description: 'Metodologias clássicas incluindo PM² (PM Square), PM3, PMBOK e PRINCE2. Oferecemos expertise em planejamento estruturado, controle rigoroso e documentação detalhada para projetos complexos e de larga escala.'
    },
    {
      icon: GraduationCap,
      title: 'Educação e Aprendizado de Produto',
      description: 'Programas de capacitação abrangentes focados no desenvolvimento de habilidades essenciais em gestão de produtos. Desde conceitos fundamentais até técnicas avançadas de análise de mercado e definição de estratégias de produto.'
    },
    {
      icon: Cog,
      title: 'Gestão de Produto Ágil',
      description: 'Abordagem completa do ciclo de vida do produto, desde o Product Discovery até a implementação. Incluímos práticas de Design Sprint, Lean Startup, Scrum e Kanban para desenvolvimento iterativo e entrega contínua de valor.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <servico.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{servico.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{servico.description}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
                    Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
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