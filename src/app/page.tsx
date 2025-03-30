import About from './sections/About';
import Hero from './sections/Hero';
import WhyUs from './sections/WhyUs';
import Tipps from './sections/Tipps';
import Specials from './sections/Specials';
import Events from './sections/Events';
import Booking from './sections/Booking';
import Contact from './sections/Contact';



export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <WhyUs />
        <Tipps />
        <Specials />
        <Events />
        <Booking/>
        <Contact/>
      </main>
    </>
  );
}
