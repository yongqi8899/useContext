import { createContext, useState } from 'react';

export const LocalisationContext = createContext();

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh');
  const translations = {
    zh: {
      title: 'Mejora tu café, mejora tu vida',
      about: {
        title: 'Bienvenido a Coffee & Co',
        content:
          'En Coffee & Co, creemos que un buen café es más que una bebida: es una forma de vida. Nos apasiona llevar la mejor experiencia de café a tu hogar u oficina. Nuestra selección de granos de café premium, máquinas de primer nivel y filtros esenciales garantiza que cada taza que prepares sea perfecta. Ya seas un novato o un barista experimentado, nuestros cursos expertos están diseñados para elevar tus habilidades en la preparación de café. Únete a nosotros en Coffee & Co y descubre cómo mejorar tu café y tu vida, una taza a la vez.'
      }
    },
    en: {
      title: 'Brew Better, Live Better',
      about: {
        title: 'Welcome to Coffee & Co',
        content: `At Coffee & Co, we believe that great coffee is more than just a beverage — it&s a
          way of life. We&re passionate about bringing the finest coffee experience to your home
          or office. Our selection of premium coffee beans, top-tier machines, and essential filters
          ensures every cup you brew is perfect. Whether you&re a novice or a seasoned barista,
          our expert courses are designed to elevate your coffee-making skills. Join us at Coffee
          & Co and discover how to brew better and live better, one cup at a time.`
      }
    },
    de: {
      title: 'Besser brauen, besser leben',
      about: {
        title: 'Willkommen bei Coffee & Co',
        content:
          'Bei Coffee & Co sind wir der Überzeugung, dass guter Kaffee mehr ist als nur ein Getränk – es ist eine Lebenseinstellung. Wir sind leidenschaftlich daran interessiert, das beste Kaffeeerlebnis in Ihr Zuhause oder Büro zu bringen. Unsere Auswahl an hochwertigen Kaffeebohnen, erstklassigen Maschinen und unverzichtbaren Filtern garantiert, dass jede Tasse, die Sie zubereiten, perfekt ist. Ob Sie ein Anfänger oder ein erfahrener Barista sind, unsere Expertenkurse sind darauf ausgelegt, Ihre Fähigkeiten in der Kaffeezubereitung zu verbessern. Treten Sie uns bei Coffee & Co bei und entdecken Sie, wie Sie besser brauen und besser leben können, eine Tasse nach der anderen.'
      }
    }
  };

  return (
    <LocalisationContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export default LocalisationProvider;
