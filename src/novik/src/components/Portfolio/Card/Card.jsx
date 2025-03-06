import './Card.css'

export default function Card({text, img}) {
    return (
        <>
            <div className='card'>
                <img src={img} alt="" />
                <a className='card-link'>{text}</a>
            </div>
        </>
    )
}