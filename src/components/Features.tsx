import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitBranch, GitMerge, BarChart } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    { icon: GitBranch, title: 'featureTitle1', description: 'featureDescription1' },
    { icon: GitMerge, title: 'featureTitle2', description: 'featureDescription2' },
    { icon: BarChart, title: 'featureTitle3', description: 'featureDescription3' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#478EA7]/5 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t('featuresTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-[#478EA7] mb-4" />
                <CardTitle>{t(feature.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t(feature.description)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;