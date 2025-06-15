import './HeroSection.css'
import fotoPerfilHero from '../../assets/PerfilPor.png';


function HeroSection({ title, mainDescriptionHero }) {

    return (
        <section className="heroContainer">

            <div className='heroInfo'>

                <h1 className='mainHeroTxt'>{title}</h1>
                
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