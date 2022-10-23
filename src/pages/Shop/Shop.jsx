import React from 'react'
import { Grid } from '@material-ui/core';
import ProductCard from './../../components/common/ProductCard/ProductCard';

const Shop = () => {
    return (
        <div className="container py-5">
            <Grid container spacing={2}>
                {[...Array(20)].map( x => 
                    <Grid item lg={3} sm={4} xs={12} key={x}>  
                        <ProductCard />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default Shop
