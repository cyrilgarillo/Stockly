'use client';

import React, { useEffect, useState } from 'react';
import './topBar.css';

interface TickerData {
  symbol: string;
  price: number;
  change: number;
  changePercent: string;
}

export default function TopBar() {
  const [scroll, setScroll] = useState(0);
  const [tickers, setTickers] = useState<TickerData[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/alphavantage');
      const data = await res.json();
      setTickers(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 7200000); // alle 2 Stunden aktualisieren

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="topbar"
      className={`d-flex align-items-center fixed-top ${
        scroll > 100 ? 'topbar-scrolled' : ''
      }`}
    >
      <div className="container d-flex justify-content-between">
        <div className="ticker-wrapper">
          <div className="ticker-content">
            {tickers.map((ticker, index) => {
              const isNegative = ticker.change < 0;
              return (
                <div key={index} className="ticker-item">
                  <span className="symbol">{ticker.symbol}</span>
                  <span className="price">${ticker.price.toFixed(2)}</span>
                  <span className={`change ${isNegative ? 'down' : 'up'}`}>
                    {ticker.change > 0 ? '+' : ''}
                    {ticker.change.toFixed(2)} ({ticker.changePercent})
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>DE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
