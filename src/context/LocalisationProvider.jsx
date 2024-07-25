import { createContext, useState } from 'react';
import selectLanguage from '@/translation/index.json';

export const LocalisationContext = createContext();

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  console.log(selectLanguage);
  const translations = selectLanguage;

  return (
    <LocalisationContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export default LocalisationProvider;
