import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Lightbulb, HeadphonesIcon } from 'lucide-react';

const NossosServicos = () => {
  const servicos = [
    {
      icon: BookOpen,
      title: 'Treinamento em Gestão de Projetos',
      description: 'Programas educacionais abrangentes sobre metodologias de gestão de projetos, incluindo tradicional, ágil, PM2 e PM3.'
    },
    {
      icon: Users,
      title: 'Workshops Interativos',
      description: 'Sessões práticas e colaborativas para aplicar conceitos de gestão de projetos em cenários do mundo real.'
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Personalizada',
      description: 'Orientação especializada para implementar e otimizar práticas de gestão de projetos adaptadas às necessidades específicas da sua organização.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte Contínuo',
      description: 'Assistência dedicada pós-implementação para garantir o sucesso contínuo e a adoção eficaz das metodologias de gestão de projetos.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Educação e Suporte em Gestão de Projetos</h2>
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