import { BrowserRouter } from "react-router-dom";
//import * as THREE from 'three';
import { styles } from "./styles";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Footer from "./components/Footer";


const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
            
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />

            </div>
          </div>

        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
