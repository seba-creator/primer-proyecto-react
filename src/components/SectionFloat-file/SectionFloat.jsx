import './SectionFloat.css'

function SectionFloat({ title, mainDescription }) {

    return (
        <section className="sectionFloat">
            <h2>{title}</h2>
            <p className="pDesc">{mainDescription}</p>
        </section>
    )
}

export default SectionFloat;