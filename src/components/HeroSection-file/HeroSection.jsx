import './HeroSection.css'
import fotoPerfilHero from '../../assets/PortfolioPerfil.png';


function HeroSection({ title, mainDescriptionHero }) {

    return (
        <section className="heroContainer">
            <div className='heroInfo'>
                <h1>{title}</h1>
                <p className="pDescHero">{mainDescriptionHero}</p>
            </div>
            <div className='heroRight'>
                <img src={fotoPerfilHero} className='fotoPerfil' alt="Foto de perfil" />
            </div>

        </section>
    )
}

export default HeroSection;