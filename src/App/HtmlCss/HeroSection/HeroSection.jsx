import React from 'react';
import './style.css';

const App = () => {
  return (
    <div>
      <h1>Sekcja hero</h1>
      <section className="hero">
        <div className="hero-content">
          <h1>Witamy w Nethos</h1>
          <p>Twoje nowoczesne rozwiązania IT</p>
          <a href="#services" className="btn-primary">
            Nasze Usługi
          </a>
        </div>
      </section>
      {/* Dalsza treść strony */}
    </div>
  );
};
