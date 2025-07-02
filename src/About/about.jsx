import react from "react";
import './About.css';  // Make sure this path is correct
import { useTranslation } from 'react-i18next';

export default function About(){
    const { t } = useTranslation(); // ✅ pour accéder aux traductions


    return(

        <section>

        <div>
            <h1>{t('nav_h2')}</h1>

            <p><span>F</span>{t('nav_aboutUs')}
</p>
        </div>

        </section>
    )
}