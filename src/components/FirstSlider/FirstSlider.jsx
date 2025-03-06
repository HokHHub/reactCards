import './FirstSlider.css'
import Card from "../Card/Card"

import { useContext } from 'react'
import { MainContext } from '../../App'

export default function FirstSlider() {
    let {first, second, third} = useContext(MainContext)
    
    return (
        <>
            <div className='slider'>
                <h2>FirstSlider</h2>
                <div className="cards">
                    <Card number={first}/>
                    <Card number={second}/>
                    <Card number={third}/>
                </div>
            </div>
        </>
    )
}