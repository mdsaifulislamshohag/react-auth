import React from 'react'
import './ProductCard.scss'
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <Link to="/singleProduct" className="productCard">
            <div className="image mb-2">
                <img src="https://via.placeholder.com/350" alt="" style={{width: "100%"}}/>
            </div>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <p><strong>Price: $100.00</strong></p>
        </Link>
    )
}

export default ProductCard
