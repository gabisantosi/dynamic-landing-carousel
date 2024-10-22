import React from 'react';
import { useTranslation } from 'react-i18next';

const ClientLogos = () => {
  const { t } = useTranslation();

  const clients = [
    { name: 'OPAS', logo: 'https://i.ibb.co/4jyDC9S/opas.jpg' },
    { name: 'Encare', logo: 'https://i.ibb.co/vqQ706w/logo-encare.png' },
    { name: 'Laços Saúde', logo: 'https://i.ibb.co/GMLgLpn/lacos-saude.png' },
    { name: 'Elfie', logo: 'https://i.ibb.co/PrKbnDZ/elfie.png' },
    { name: 'Ministério da Saúde', logo: 'https://i.ibb.co/2sRYkNb/MINISTERIO-DA-SAUDE.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('ourClients')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;