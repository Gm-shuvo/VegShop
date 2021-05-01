import React from 'react'
import { BsDot } from 'react-icons/bs'
import { FaGreaterThan } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
	return (
		<div className="path_header">	
				<h5>Home {`>`}</h5>
				
				<h5><a href='/collections/products' >products</a></h5>
		</div>
	)
}

export default Header
