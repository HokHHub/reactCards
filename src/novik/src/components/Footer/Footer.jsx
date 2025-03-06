import './Footer.css'
import Button from '/src/components/Button/Button'
import Contacts from './Contacts/Contacts'
import H2 from '../h2/h2'

export default function Footer() {
    return (
        <>
            <footer id='contacts'>
                <H2 titleText={'Contacts'} />
                <p className='footer-text'>Want to know more or just chat? <br /> You are welcome!</p>
                <Button btnText='Send Message' />
                <Contacts />
            </footer>
        </>
    )
}