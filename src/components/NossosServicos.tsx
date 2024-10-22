import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Cog } from 'lucide-react';

const NossosServicos = () => {
  const servicos = [
    {
      icon: Briefcase,
      title: 'Gestão de Projetos Tradicional',
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços Especializados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <servico.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{servico.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{servico.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NossosServicos;