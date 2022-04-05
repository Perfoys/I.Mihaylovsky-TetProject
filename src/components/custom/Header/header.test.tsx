import React from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { mount, ReactWrapper } from 'enzyme';
import Header from '.';
import { initialSprint } from '../../../data/initialSprint';
import LanguageProvider from '../../../providers/LanguageProvider';
import enTranslation from '../../../public/locales/en/translation.json';
import ruTranslation from '../../../public/locales/ru/translation.json';

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation }
    }
  });

describe('Header component testing', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <React.Suspense fallback={<h1>Loading</h1>}>
        <LanguageProvider>
          <Header sprint={initialSprint}/>
        </LanguageProvider>
      </React.Suspense>
    );
  });
  test('Header component renders correctly', () => {
    expect(wrapper).toHaveLength(1);
  });
  test('Language change button works properly', () => {
    const langButton = wrapper.find('button.langButton');
    langButton.simulate('click');
    const startDate = wrapper.find('#start-date');
    expect(startDate.text()).toContain('Дата начала');
  });
});
