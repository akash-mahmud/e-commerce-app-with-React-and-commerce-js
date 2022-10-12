import React from 'react'
import {Grid} from '@material-ui/core'
import Product from './product/Product'
import useStyles from './ProductsStyle'
export default function Products({ products, onAddToCart }) {
    const classes = useStyles()

  return (
      <>
          <main className={classes.content}>
              <div className={ classes.toolbar} />
              <Grid container justify='center' spacing={4}>
                  {
                      products.map((product) => (
                          <>
                              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                  <Product onAddToCart={onAddToCart} product={product} />    
                          </Grid>
                          </>
                      ))
                  }
              </Grid>
          </main>
    </>
  )
}
