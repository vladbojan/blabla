
import React, { createContext, useState, useContext } from 'react';
import enTranslations from "../locales/en.json";
import roTranslations from "../locales/ro.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en'); // Default language is English

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    const translations = language === 'en' ? enTranslations : roTranslations;

    return (
        <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
