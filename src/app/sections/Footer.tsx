import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="disclaimer">
          <h4>Disclaimer</h4>
          <p>
            Die Inhalte auf dieser Website stellen keine Anlageberatung oder Empfehlung im rechtlichen Sinne dar. Trotz sorgfältiger
            Recherche übernehmen wir keine Haftung für finanzielle Entscheidungen, die auf Grundlage der bereitgestellten Informationen
            getroffen werden. Investitionen sind mit Risiken verbunden – eine Garantie auf Gewinne gibt es nicht.
          </p>
        </div>

        <div className="copyright">
          &copy; Copyright <strong><span>Stockly</span></strong>. All Rights Reserved
        </div>

        <div className="credits">
          Designed by <a href="#">C:S</a>
        </div>
      </div>
    </footer>
  );
}
