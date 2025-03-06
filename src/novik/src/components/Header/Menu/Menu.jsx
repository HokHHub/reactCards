import './Menu.css'

export default function Menu() {
    return (
        <>
            <ul className='list'>
                <li><a className='list-text' href="#home">Home</a></li>
                <li><a className='list-text' href="#about">About me</a></li>
                <li><a className='list-text' href="#skills">Skills</a></li>
                <li><a className='list-text' href="#portfolio">Portfolio</a></li>
                <li><a className='list-text' href="#contacts">Contacts</a></li>
            </ul>
            <hr className='list-hr' />
        </>
    )
}