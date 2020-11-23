import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Grid, IconButton, rgbToHex, Toolbar, Typography } from '@material-ui/core';
import { BorderRight } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    posicion:{
      textAlign:'center',
    },
    estiloShop:{
      backgroundColor:'white',
      width: '30%',
      position: 'relative',
      left: '30%',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    estiloLogo:{
      backgroundColor:'white',
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
      width: '50%',
    },
    estiloicon:{
      marginTop: theme.spacing(2),
    }

}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  

  return (
    <div>
        <div>
          <Grid container spacing={3}>
           
            <Grid item xs={3}>
              <div className={classes.estiloLogo}>
                <h1 className={classes.posicion}>boton 1</h1>
              </div>
              
            </Grid>

            <Grid item xs={6}>
              <div className={classes.estiloShop}>
                < h1 className={classes.posicion}>SHOP</h1>
              </div>
              
            </Grid>
            
            <Grid item xs={1}>
              <IconButton color="action" className={classes.estiloicon}>
                <ShoppingCartIcon style={{color: "white" , fontSize: 40}} />
              </IconButton>
            </Grid>
            
            <Grid item={1}>
              <IconButton className={classes.estiloicon}>
                <MenuIcon  style={{color: "white" , fontSize: 40}}/>
              </IconButton>
            </Grid>
          </Grid>  
        </div>
    </div>
  );
}
