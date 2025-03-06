import './Card.css'
import Image from '../Image/Image'
import Text from '../Text.jsx/Text'

export default function Card({number}) {

    return (
        <>
            <div className='block'>
                <Image source={number.source}/>
                <Text text={number.text}/>
            </div>
        </>
    )
}