import './HeroSection.css'

function HeroSection({ title, mainDescriptionHero }) {

    return (
        <section className="heroContainer">
            <div>
                <h1>{title}</h1>
                <p className="pDescHero">{mainDescriptionHero}</p>
            </div>
            <div>
                <p>BLA BLA BLA</p>
            </div>

        </section>
    )
}

export default HeroSection;