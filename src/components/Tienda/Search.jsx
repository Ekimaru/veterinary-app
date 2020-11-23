import Rect from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Button, Link, MenuItem, Select, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    fondo:{
        backgroundColor:'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginLeft: theme.spacing(2),
        width: '100%',
       
    },
    posicioncomponen:{
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(4),
        
    },
    posiciontext:{
        fontSize: '14px',
        textAlign:'center',
    }
}))

export default function Search(){
    const classes = useStyles();
    const theme =useTheme();

    return(
        <div>
            <div className={classes.fondo} style={{display: "flex", alignItems: "center", justifyContent: "center"}} >
                
                <Typography>
                
                <TextField  className={classes.posicioncomponen} label="Search" variant="outlined"/>
                    <h2 className={classes.posiciontext}>Tipo de Alimento</h2>
                    <Button>Concentrado</Button>
                    <Button>Latas</Button>
                    <Button>Pouches</Button>
                <br />
                <h2 className={classes.posiciontext}>Por Cantidad de Alimento</h2>
                    <Select className={classes.posicioncomponen} value="" displayEmpty>
                            <MenuItem value="" disabled >Seleccione</MenuItem>
                            <MenuItem value={1} > 15 gr</MenuItem>
                            <MenuItem value={2} > 20 gr</MenuItem>
                    </Select>
                </Typography>                
            </div>

        </div>
    );
}