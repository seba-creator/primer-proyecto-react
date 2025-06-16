import './HeroSection.css'
import { ReactTyped } from 'react-typed';

import fotoPerfilHero from '../../assets/PerfilPor.png';


function HeroSection({ mainDescriptionHero }) {

    return (
        <section className="heroContainer">

            <div className='heroInfo'>
                <h1 className='mainHeroTxt'>
                    Hey, this is <br />
                    <ReactTyped
                        strings={['Sebastian Arocena', 'Web Developer']}
                        typeSpeed={60}
                        backSpeed={50}
                        backDelay={1500}
                        loop={false}
                    />
                </h1>

                <div className='infoHero'>
                    <p className="pDescHero">{mainDescriptionHero}</p>
                    <button className='heroBtn'>Contacto</button>
                </div>

            </div>

            <div className='heroRight'>
                <img src={fotoPerfilHero} className='fotoPerfil' alt="Foto de perfil" />
            </div>

        </section>
    )
}

export default HeroSection;
