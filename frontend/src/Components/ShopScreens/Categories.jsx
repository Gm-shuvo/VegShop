import React, { useState } from 'react';
import './Category.css';
import SliderRange from './SliderRange';
const Categories = () => {
    const [range, setRange] = useState('0')
    const handleRange = (e) => {
        setRange(e.target.value)
    }
    return (
        <div className='cate_container'>
           <div className="title" >
                 <h3 style={{fontSize:'18px',fontWeight:'700',lineHeight:'20px'}}>Categories</h3>
            </div> 
           <div className="cate_list" >
               <ul>
                   <li style={{marginBottom:'12.5px'}}> <a  href="collection/FruitProducts">Fruit Products</a></li>
                   <li style={{marginBottom:'12.5px'}} > <a  href="collection/FreshMeats">Fresh Meats</a></li>
                   <li style={{marginBottom:'12.5px'}} > <a   href="collection/OceanFoods">Ocean Foods</a></li>
                   <li style={{marginBottom:'12.5px'}} > <a  href="collection/FeatureProduct">Feature Product</a></li>
                   <li style={{marginBottom:'12.5px'}} > <a  href="collection/NewProducts">New Products</a></li>
                   <li style={{marginBottom:'12.5px'}} > <a  href="collection/Saleoff">Sale off</a></li>
               </ul>
           </div>


           <div className="filter_by_price">
               <h2>Filter by price</h2>
               <div className="range_slider_container">
                   <SliderRange handleRange={handleRange} range={range}/>
               </div>
               <div className="filter_button">
                   <button className="button" type="button" onclick={''}>
                       <h2 className="button_title">Fliter {'>'}</h2>
                       
                   </button>
               </div>
               <div className="best_seller_container">
                  <div className="best_seller">
                    <h2>Best Seller</h2>
                    
                  </div>
               </div>
           </div>
        </div>
    )
}

export default Categories

