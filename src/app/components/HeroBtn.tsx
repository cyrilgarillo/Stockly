import React from 'react';
import './heroBtn.css';

export default function HeroBtn({
  name,
  target,
}: {
  name: string;
  target: string;
}) {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // verhindert das Standardverhalten (kein Sprung)
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${target}`} // für Fallback und SEO okay
      onClick={handleScrollTo}
      className={`btn-hero animated fadeInUp scrollto ${
        name.includes('book') ? 'ms-4' : ''
      }`}
    >
      {name}
    </a>
  );
}
