import React, { useState } from 'react'
import Categories from '../Components/ShopScreens/Categories'
import Header from '../Components/ShopScreens/Header'
import {AiOutlineClose} from 'react-icons/ai'
import {RiListSettingsFill} from 'react-icons/ri'
import ProductsList from '../Components/ShopScreens/ProductsList'
import './ShopScreen.css'
import { DropDownButon } from '../Components/ShopScreens/DropDownButon'
import { BsGrid } from 'react-icons/bs'
import { BiGridHorizontal } from 'react-icons/bi'
import ProductCard from '../Components/ShopScreens/ProductCard'
const ShopScreen = () => {
    const [OpenSlider, setOpenSlider] = useState(false)
    const [verticalView,setverticalView] = useState(true)
    
   // console.log(OpenSlider);
    return (
        <>
        <div className="wrapper">
            <div className="header">
                <Header />
            </div>
            <div className="mainContainer">
                <section id='pageContent'>
                    <div className= 'container'>
                        <div className="pageCollectionInner">
                            <div className="row">
                                <aside className={OpenSlider ? "filterTagFullwidthContent_active" : "filterTagFullwidthContent"}>
                                    <div className='filterTagFullwidthClose'>
                                        <AiOutlineClose onClick={()=> setOpenSlider(false)}/>
                                    </div>
                                    <Categories/>
                                </aside>
                                <div className='ProListCollectionContainer'>
                                    <div className='proListCollection'>
                                        <div className='fliterCollectFullWidth'>
                                            <div className='filterButtonInFullWidth' onClick={()=>setOpenSlider(!OpenSlider)}>
                                                     <RiListSettingsFill />
                                                    <h2 style={{paddingTop:'8px'}}>Filter</h2>
                                            </div>    
                                            <BsGrid  onClick={()=>setverticalView(true)}/>
                                            <BiGridHorizontal  onClick={()=>setverticalView(false)}/>        
                                        
                                        </div>
                                        <div className='filterOptions'>
                                                <DropDownButon/>
                                        </div>
                                    </div>
                                    <div className='proListGridContainer'>
                                        <div className={verticalView ? 'proListGrid' :'proListHori'}>
                                            <ProductCard verticalView={verticalView}/>
                                            <ProductCard verticalView={verticalView}/> 
                                            <ProductCard verticalView={verticalView}/>
                                            <ProductCard verticalView={verticalView}/>
                                            <ProductCard verticalView={verticalView}/> 
                                            <ProductCard verticalView={verticalView}/>
                                        </div>
                                    </div>

                                    

                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                
            </div>

        </div>
        </>
    )
}

export default ShopScreen
