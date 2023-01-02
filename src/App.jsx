import React from 'react';
import styles from './style';
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from './components/index';

const App = () => {
  return (
    <div className=' bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billing />
          <CardDeal />
          <Business />
          <Clients />
          <CTA />
          <Stats />
          <Footer />
          <Testimonials />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
