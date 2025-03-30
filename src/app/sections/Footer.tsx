import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Restaurant Info */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Stockly</h3>
                <p>
                  Bernstrasse 12<br />
                  3001 Bern
                  <br />
                  <br />
                  <strong>Phone:</strong> 0000000000
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Tipps</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Events</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Gallery</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container">
        <div className="copyright">
          &copy; Copyright{' '}
          <strong>
            <span>Stockly</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">C:S</a>
        </div>
      </div>
    </footer>
  );
}
