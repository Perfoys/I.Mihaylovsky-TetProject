import * as React from 'react';

export interface ILanguageContext {
  lang: string,
  changeLanguage?: () => void
}

const LanguageContext = React.createContext<ILanguageContext>({
  lang: '',
  changeLanguage: undefined
});

export default LanguageContext;
