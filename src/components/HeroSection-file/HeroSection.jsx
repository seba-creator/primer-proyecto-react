import './HeroSection.css'
import fotoPerfil from '../../assets/perfil.JPG';
import fotoPerfil1 from '../../assets/FotoPortfolio.jpeg';
import fotoPerfil2 from '../../assets/PortfolioPerfil.png';


function HeroSection({ title, mainDescriptionHero }) {

    return (
        <section className="heroContainer">
            <div className='heroInfo'>
                <h1>{title}</h1>
                <p className="pDescHero">{mainDescriptionHero}</p>
            </div>
            <div className='heroRight'>
                <img src={fotoPerfil2} className='fotoPerfil' alt="Foto de perfil" />
            </div>

        </section>
    )
}

export default HeroSection;