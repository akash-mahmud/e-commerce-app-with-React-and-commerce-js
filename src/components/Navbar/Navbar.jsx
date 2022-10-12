import React from 'react'
import {AppBar , Toolbar , IconButton , Badge , Menu , MenuItem , Typography} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/images/e-commerce.png'
import useStyles from './NavBarStyles'
export default function Navbar({ totalItems }) {
    const classes = useStyles()
  return (
      <>
          <AppBar position='fixed' className={classes.appBar} color='inherit'>
              <Toolbar>
                  <Typography variant="h6" className={classes.title} color='inherit'>
                      <img src={logo} alt='e-commerce app' height="25px" className={ classes.image} />
                  E-commerce App
                  </Typography>
                  <div className={classes.grow} />
                  <div className={classes.button}>
                      <IconButton aria-label='show cart items' color='inherit'>
                          <Badge badgeContent={totalItems} color='secondary'>
                              <ShoppingCart/>
                          </Badge>
                      </IconButton>
                  </div>
              </Toolbar>
          </AppBar>
    </>
  )
}
