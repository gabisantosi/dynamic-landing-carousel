import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "O que é saúde digital?",
      answer: "Saúde digital é a convergência das tecnologias digitais com a saúde, assistência médica, vida e sociedade para melhorar a eficiência da prestação de cuidados de saúde e tornar os medicamentos mais personalizados e precisos."
    },
    {
      question: "Como a Kure Saúde pode ajudar minha organização?",
      answer: "A Kure Saúde oferece consultoria especializada em transformação digital para organizações de saúde, ajudando na implementação de tecnologias, otimização de processos e treinamento de equipes."
    },
    {
      question: "Qual é a experiência da Kure Saúde no mercado?",
      answer: "Com mais de duas décadas de experiência em gestão de projetos e transformação digital, nossa equipe tem um histórico comprovado de sucesso em projetos de saúde digital no Brasil e internacionalmente."
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
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            Perguntas Frequentes
          </h1>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;