import './SectionFloat.css';
import { useState } from 'react';

// Supongamos que estos son tus logos (después los vas a cambiar)
import reactLogo from '../../assets/ReactLogo.png';
import webflowLogo from '../../assets/WebflowLogo.png';
import svelteLogo from '../../assets/SvelteLogo.png';
import jsLogo from '../../assets/JsLogo.png'
import poloImg from '../../assets/poloSiteImg.png'
import poloSiteVideo from '../../assets/poloVideoSite.mp4'
import HoverVideoCard from '../HoverVideoCard-file/HoverVideoCard';



const techData = {
    React: {
        title: "React",
        description: "Librería moderna de JavaScript para construir interfaces dinámicas y reactivas.",
        descWork: "Entre 2022 y 2025 trabajé en PoloTab, una startup enfocada en tecnología. Mi enfoque estaba en el desarrollo y mantenimiento de sitios web en la plataforma de Webflow, desde landings hasta páginas de precios y más. Las animaciones nativas le daban vida a sitios dinámicos. Seguía diseños en Figma y colaboraba de cerca con el equipo para mejorar el sistema. Un mix entre diseño, código y ritmo startup.",
        color: "#61dafb"
    },
    Webflow: {
        title: "Webflow",
        descTool: "Plataforma de diseño visual para construir sitios web responsive sin código.",
        descWork: "Entre 2022 y 2025 trabajé en PoloTab, una startup enfocada en tecnología. Mi enfoque estaba en el desarrollo y mantenimiento de sitios web en la plataforma de Webflow, desde landings hasta páginas de precios y más. Las animaciones nativas le daban vida a sitios dinámicos. Seguía diseños en Figma y colaboraba de cerca con el equipo para mejorar el sistema. Un mix entre diseño, código y ritmo startup.",
        color: "#4353ff",
        image: poloImg

    },
    JavaScript: {
        title: "JavaScript",
        description: "Lenguaje de programación versátil que da vida a las interfaces web con interactividad y dinamismo.",
        descWork: "Entre 2022 y 2025 trabajé en PoloTab, una startup enfocada en tecnología. Mi enfoque estaba en el desarrollo y mantenimiento de sitios web en la plataforma de Webflow, desde landings hasta páginas de precios y más. Las animaciones nativas le daban vida a sitios dinámicos. Seguía diseños en Figma y colaboraba de cerca con el equipo para mejorar el sistema. Un mix entre diseño, código y ritmo startup.",
        color: "#f7df1e"
    },
    Svelte: {
        title: "Svelte",
        description: "Framework que compila a JavaScript puro, ultra rápido y minimalista.",
        descWork: "Entre 2022 y 2025 trabajé en PoloTab, una startup enfocada en tecnología. Mi enfoque estaba en el desarrollo y mantenimiento de sitios web en la plataforma de Webflow, desde landings hasta páginas de precios y más. Las animaciones nativas le daban vida a sitios dinámicos. Seguía diseños en Figma y colaboraba de cerca con el equipo para mejorar el sistema. Un mix entre diseño, código y ritmo startup.",
        color: "#ff3e00"
    }
};

function SectionFloat({ }) {
    const [selectedTech, setSelectedTech] = useState("React");

    return (
        <section className="sectionFloat">

            <div className="techCard" style={{ backgroundColor: techData[selectedTech].color }}>
                {selectedTech === "Webflow" && (
                    <HoverVideoCard
                        screenshotSrc={poloImg}
                        videoSrc={poloSiteVideo}
                    />
                )}
                <div className='workTxtCont'>
                    <h3>{techData[selectedTech].title}</h3>
                    <p>{techData[selectedTech].descTool}</p>
                    <p>{techData[selectedTech].descWork}</p>
                </div>


            </div>

            <div className='skillSelector'>
                <img src={reactLogo} alt="React" onClick={() => setSelectedTech("React")} className={selectedTech === "React" ? "active" : ""} />
                <img src={webflowLogo} alt="Webflow" onClick={() => setSelectedTech("Webflow")} className={selectedTech === "Webflow" ? "active" : ""} />
                <img src={jsLogo} alt="JavaScript" onClick={() => setSelectedTech("JavaScript")} className={selectedTech === "JavaScript" ? "active" : ""} />
                <img src={svelteLogo} alt="Svelte" onClick={() => setSelectedTech("Svelte")} className={selectedTech === "Svelte" ? "active" : ""} />
            </div>

        </section>
    );
}

export default SectionFloat;
