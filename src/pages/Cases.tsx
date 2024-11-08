import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Users, Clock, PieChart } from 'lucide-react';

const Cases = () => {
  const cases = [
    {
      title: "Hospital Regional - Transformação Digital",
      metrics: {
        efficiency: "35%",
        satisfaction: "92%",
        time: "40%"
      },
      description: "Implementação de sistema integrado de gestão hospitalar, resultando em melhor eficiência operacional e satisfação dos pacientes."
    },
    {
      title: "Clínica Multiespecialidade - Otimização de Processos",
      metrics: {
        efficiency: "45%",
        satisfaction: "88%",
        time: "50%"
      },
      description: "Redesenho de processos e implementação de ferramentas digitais para agendamento e gestão de pacientes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            Cases de Sucesso
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {case_.title}
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-muted-foreground">{case_.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <PieChart className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-primary">{case_.metrics.efficiency}</div>
                        <div className="text-sm text-muted-foreground">Eficiência</div>
                      </div>
                      <div className="text-center">
                        <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-primary">{case_.metrics.satisfaction}</div>
                        <div className="text-sm text-muted-foreground">Satisfação</div>
                      </div>
                      <div className="text-center">
                        <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold text-primary">{case_.metrics.time}</div>
                        <div className="text-sm text-muted-foreground">Tempo Reduzido</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Cases;