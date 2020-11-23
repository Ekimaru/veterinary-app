import React from 'react';
import Navbar from '../Tienda/Navbar';
import Search from '../Tienda/Search';
import Comida from '../Tienda/Comida';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


const useStyle = makeStyles((theme => ({
    fondo:{
        
        backgroundColor: '#0B5345',
       
    },
    color_texto: {
        color: 'white',
    }

})));
export default function Shop(){
    const classes = useStyle();
    return(
        <div className={classes.fondo}>
            <Navbar />   
             <Grid container spacing={3}>
                 <Grid item={6}>
                    <Search />
                 </Grid>
                 <Grid item={6}>
                    <Comida />
                 </Grid>
             </Grid>
            
        </div>
    )
}
