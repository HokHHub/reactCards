import './Portfolio.css'
import Card from './Card/Card'
import H2 from '../h2/h2'

export default function Portfolio() {
    return (
        <>
            <div id='portfolio' className="portfolio">
                <div className="portfolio-all">
                    <H2 titleText={'Portfolio'} />
                    <div className="portfolio-cards">
                        <Card text="Online fashion store - Homepage" img="/img/FashionStore.jpg" />
                        <Card text="Reebok Store - Concept" img="/img/reebok.jpg" />
                        <Card text="Braun Landing Page - Concept" img="/img/braun.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}