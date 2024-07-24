import { createContext, useState } from 'react';
import selectLangage from '@/translations/index.json';

export const LocalisationContext = createContext();

const LocalisationProvider = ({ children }) => {
  const [language, setLanguage] = useState('zh');
  const translations = {selectLangage};

  return (
    <LocalisationContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LocalisationContext.Provider>
  );
};

export default LocalisationProvider;
