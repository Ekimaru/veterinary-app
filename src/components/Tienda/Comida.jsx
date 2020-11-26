import React from 'react';
import Cardcomida from '../Tienda/Cardcomida';
import datos from '../Tienda/datos';
import {makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root:{
    
    overflow:'hidden',
    flexDirection:'column',
    justifyContent:'space-between',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding : 0,
    margin: 0,
    listStyleType: 'none',

    
},
estilo:{
    flex: '1 1 29rem',
    height: '47rem',
    padding: '1rem',
    margin:'1rem',
    
}
}));

export default function Comida(){
    const classes = useStyles();
    const theme = useTheme();
    return(
        <div className={classes.root}>
            <Cardcomida flexWrap="wrap" className={classes.estilo} datos={datos[0]} />
            <Cardcomida flexWrap="wrap" className={classes.estilo} datos={datos[1]} />
            <Cardcomida flexWrap="wrap" className={classes.estilo} datos={datos[2]} />
            <Cardcomida flexWrap="wrap" className={classes.estilo} datos={datos[0]} />
            <Cardcomida flexWrap="wrap" className={classes.estilo} datos={datos[1]} />
            <Cardcomida flexWrap="wrap" className={classes.estilo} datos={datos[2]} />
            
            
        </div>
    );
}