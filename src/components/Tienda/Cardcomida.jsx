import React from 'react';
import foto from '../Tienda/img/imgcomida.jpg';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 250,
        marginLeft:theme.spacing(4),
      },
      media: {
          maxHeight:140,
          maxWidth:100,
            width: 100,
            height: 140,
      },
      cardstyle:{
          
         display:'flex',
         justifyContent:'space-between',
         alignItems:'center',
      }
}));

export default function Cardcomida ({datos}){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Card  flexWrap="wrap" className={classes.cardstyle}>
                <CardHeader 
                action={
                    <IconButton>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                }
                />
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={datos.imagenurl}
                    />
                    <CardContent>
                        <Typography>
                            {datos.title}
                        </Typography>
                        <Typography>
                            {datos.descripcion} 
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </div>
    );
}