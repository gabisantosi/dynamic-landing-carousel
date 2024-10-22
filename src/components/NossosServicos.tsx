import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckSquare, BarChart2, GitBranch } from 'lucide-react';

const NossosServicos = () => {
  const servicos = [
    {
      icon: Briefcase,
      title: 'Gestão de Projetos Tradicional',
      description: 'Metodologias clássicas para gerenciamento de projetos, incluindo abordagens em cascata.'
    },
    {
      icon: GitBranch,
      title: 'Gestão Ágil de Projetos',
      description: 'Métodos ágeis como Scrum e Kanban para projetos flexíveis e adaptativos.'
    },
    {
      icon: CheckSquare,
      title: 'PM2 - Project Management Methodology',
      description: 'Metodologia de gerenciamento de projetos da Comissão Europeia para projetos institucionais.'
    },
    {
      icon: BarChart2,
      title: 'PM3 - Portfolio, Programme and Project Management',
      description: 'Abordagem integrada para gerenciamento de portfólio, programa e projeto.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços de Gestão de Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicos.map((servico, index) => (
            <Card key={index}>
              <CardHeader>
                <servico.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{servico.title}</CardTitle>
              </CardHeader>
              <CardContent>
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