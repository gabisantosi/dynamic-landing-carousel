import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Brain, Microscope } from 'lucide-react';

const NossosServicos = () => {
  const servicos = [
    {
      icon: Stethoscope,
      title: 'Consultoria Clínica',
      description: 'Otimização de processos clínicos e melhoria da qualidade do atendimento ao paciente.'
    },
    {
      icon: Brain,
      title: 'Inovação em Saúde',
      description: 'Implementação de tecnologias de ponta e soluções inovadoras para o setor de saúde.'
    },
    {
      icon: Microscope,
      title: 'Pesquisa e Desenvolvimento',
      description: 'Suporte em projetos de pesquisa e desenvolvimento de novas terapias e tratamentos.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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