import React from 'react'
import './SliderRange.css'
const SliderRange = ({handleRange,range}) => {
    return (
        <div className='slidecontainer'>
            <input className='slider' type="range" min="0" max="100" value={range} onChange={handleRange}/>
           
        </div>


    )
}

export default SliderRange
