"use client"
import React, {useEffect, useState} from 'react';

const Translator = () => {
    const [scriptInjected, setScriptInjected] = useState(false);

    useEffect(() => {
        // Check if the translation script is already injected in the DOM
        if (!scriptInjected) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.type = 'text/javascript';
            script.innerHTML = `
                function googleTranslateElementInit() {
                    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ro', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
                }
            `;
            document.head.appendChild(script);

            const scriptElement = document.createElement('script');
            scriptElement.type = 'text/javascript';
            scriptElement.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.head.appendChild(scriptElement);

            // Update state to indicate that the script is injected
            setScriptInjected(true);

            return () => {
                document.head.removeChild(script);
                document.head.removeChild(scriptElement);
            };
        }
    }, [scriptInjected]);

    return (
        <>
            <div className={""} id="google_translate_element" style={{height: "40px",width:"150px", overflow: "hidden", borderRadius: "5px", padding: "0 20px"}}></div>
        </>
    );
};

export default Translator;
