import './AboutMe.css'
import H1 from './h1/h1'

export default function AboutMe() {
    return (
        <>
            <div id='about' className='about'>
                <div className="about-all">
                    <H1 />
                    <div className="about-texts">
                        <p className='about-text'>
                            Hi, I'm Denis – UX/UI designer from Minsk.
                            I'm interested in design and everything connected with it.
                        </p>
                            <p className='about-text'>
                            I'm studying at courses "Web and mobile design 
                        interfaces" in IT-Academy.
                        </p>
                                           <p className='about-text'>
                        Ready to implement excellent projects
                        with wonderful people.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}