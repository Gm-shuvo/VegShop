import React, { useState } from 'react'
import './DropDown.css'
import {RiArrowDropDownLine} from 'react-icons/ri'
export const DropDownButon = () => {
    const [OpenDrop, setOpenDrop] = useState(false)
    return (
        <div className="dropdown">
            <div className='buttonWithIcon' >
                <button className="dropbtn" type="button" onClick={()=> setOpenDrop(!OpenDrop)}>
                    Default Sorting
                </button>
                <RiArrowDropDownLine/>
            </div>

            <div className= {OpenDrop ?  "dropdown-content-show" : "dropdown-content"}>
                <a className="dropdown-item" href="#"></a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
      </div>
    )
}
