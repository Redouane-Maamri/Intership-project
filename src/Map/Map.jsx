import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MapEmbed() {
  const mapsUrl =
    "https://www.google.com/maps/place/76+Rue+Ibn+Hazm,+Casablanca,+Morocco/@33.5941988,-7.574987,17z";

    const {t} = useTranslation();

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
        color: '#fff',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        maxWidth: '100vw',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0,0,0,0.7)',
      }}
    >
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Open location in Google Maps"
        style={{
          position: 'relative',
          display: 'inline-block',
          borderRadius: '10px',
          overflow: 'hidden',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease',
          width: '100%',
          maxWidth: '1300px',
        }}
      >
        <iframe
  title="Localisation 76 Rue Ibn Hazm"
  width="100%"
  height="400"
  style={{ border: 0, pointerEvents: 'none', display: 'block' }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1661.7139811381564!2d-7.574986917476074!3d33.594198785875044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd1b96321cb7%3A0x12e3e191372eafeb!2s76%20Rue%20Ibn%20Hazm!5e0!3m2!1sen!2sma!4v1751554560292!5m2!1sen!2sma"></iframe>


        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            fontWeight: '600',
            textShadow: '0 0 5px rgba(0,0,0,0.9)',
            opacity: 0.85,
            transition: 'opacity 0.3s ease',
          }}
          className="map-overlay"
        >
          Cliquez pour ouvrir dans Google Maps
        </div>
      </a>

      <h3 style={{ marginTop: '25px', fontWeight: '700' }}>{t("nav-horaire")}</h3>
      <p style={{ fontSize: '1rem', margin: '8px 0' ,color : 'black' , fontWeight : 'bold' }}>
        8:00 &rarr; 12:00 || 14:00 &rarr; 18:00
      </p>

      <p style={{ marginTop: '20px', fontSize: '1rem' }}>
        📍{' '}
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1e90ff', textDecoration: 'underline' }}
        >
          76 Rue Ibn Hazm, Casablanca – Maroc
        </a>
      </p>
    </div>
  );
}
