import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, TrendingUp } from 'lucide-react';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Heart, title: 'featureTitle1', description: 'featureDescription1' },
    { icon: Users, title: 'featureTitle2', description: 'featureDescription2' },
    { icon: TrendingUp, title: 'featureTitle3', description: 'featureDescription3' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('featuresTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
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