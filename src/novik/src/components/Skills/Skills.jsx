import './Skills.css'
import H2 from '../h2/h2'
import Skill from './Skill/Skill'

export default function Skills() {
    return (
        <>
            <div className="skills" id='skills'>
                <H2 titleText={'Skills'}/>
                <p className='skills-text'>I work in such programs as</p>
                <div className="skills-all">
                    <Skill name='Adobe Photoshop' img={'/img/PS.svg'} numofskills={4} />
                    <Skill name='Adobe Illustrator' img={'/img/AI.svg'} numofskills={3} />
                    <Skill name='Adobe After Effects' img={'/img/AE.svg'} numofskills={4} />
                    <Skill name='Figma' img={'/img/Figma.svg'} numofskills={4} />
                </div>
            </div>
        </>
    )
}