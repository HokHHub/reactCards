import Menu from './Menu/Menu'
import HeaderInfo from './HeaderInfo/HeaderInfo'
import './Header.css'

export default function Header() {
    return (
        <>
            <div className='header' id='home'>
                <Menu />
                <HeaderInfo />
            </div>
        </>
    )
}