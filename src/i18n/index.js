import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';
import langZH from './langZH'
import langEN from './langEN'
import langTH from './langTH'
i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: langEN
            },
            zh: {
                translation: langZH
            },
            th: {
                translation: langTH
            }
        },
        lng: "zh",
        fallbackLng: 'zh',

        interpolation: {
            escapeValue: false
        }
    });
export default i18n;