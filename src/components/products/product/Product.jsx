import React from 'react'
import {Card , CardMedia , CardContent   , CardActions, Typography , IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './productStyle'
export default function Product({ product, onAddToCart }) {
    const classes = useStyles()

  return (
      <>
          <Card className={classes.root}>
              <CardMedia className={classes.media} image={product.image.url} title={product.name} />
              <CardContent>
                  <div className={classes.content}>
                      <Typography variant='h5' gutterBottom>
                          {product.name}
                      </Typography>
                      <Typography variant='h5' >
                          {product.price.formatted_with_symbol}
                      </Typography>
                  </div>
                  <Typography dangerouslySetInnerHTML={{
                      __html: product.description
                  }} variant='body2' color='textSecondary'>
                     
                  </Typography>
              </CardContent>
              <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton onClick={() => onAddToCart(product.id , 1)} aria-label='Add to cart'>
                      <AddShoppingCart />
                  </IconButton>
              </CardActions>
          </Card>
    </>
  )
}
