import './App.css';

import Navbar from './components/Navbar-file/Navbar';
import BgParticles from './components/BgParticles-file/BgParticles';
import SectionFloat from './components/SectionFloat-file/SectionFloat';
import HeroSection from './components/HeroSection-file/HeroSection';

function App() {
  return (
    <div>
      <BgParticles />

      <Navbar name={"Sebastian Arocena Geldenhuys"} contact={"Contacto"} />
      <div className="siteContainer">
        <div className='mainContainer'>
          <HeroSection title={"Bienvenido, yo soy"} mainDescriptionHero={"Bienvenido a mi espacio digital. Soy Sebastian Arocena, Front-End Developer enfocado en crear interfaces modernas y funcionales."}/>
          <SectionFloat title={"soy Seba =)"} mainDescription={"Mi nombre es Sebastian Arocena y mi novia es Valentina =)"} />
        </div>
      </div>


    </div>
  );
}

export default App;
