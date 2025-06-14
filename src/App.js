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
      <container className="siteContainer">
        <div className='mainContainer'>
          <HeroSection title={"Hola Bienvenido"} mainDescriptionHero={"Mi nombre es Sebastian Arocena y mi novia es Valentina =)"}/>
          <SectionFloat title={"soy Seba =)"} mainDescription={"Mi nombre es Sebastian Arocena y mi novia es Valentina =)"} />
        </div>
      </container>


    </div>
  );
}

export default App;
