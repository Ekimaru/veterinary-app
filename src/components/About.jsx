import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles((theme) => ({

    root: {
        height: '100vh',
        fontFamily: 'Nunito',

    },
    card: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '5%',
    },
    title: {
        fontSize: '3rem',
        fontFamily: 'Nunito',
        color: '#fff',
        justifyContent: 'center',
        TextAlign: 'center',
        alignItems: 'top',
        display: 'flex',
        marginTop: '10%',
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       
        
       },
       title2: {
           fontFamily: 'Nunito',
           fontWeight: 'bold',
           fontSize: '2.4rem',
           color: '#fff',  
           textAlign: 'center',
           margin: '10%',
           alignItems: 'center',    
       },
       desc: {
           fontFamily: 'PT Serif',
           fontSize: '1.1rem',
           color: '#ddd',
       }
}))



    export default function () {
        const classes= useStyles(); {            
         
            return (
            <div className={classes.root} id="about">
                <h1 className={classes.title} >Acerca de Nosotros</h1>

           

            <div className={classes.content}>

            <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component= "h2" className={classes.title2}>
                    Misión
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Lorem ipsum dolor sit amet consectetur.
                </Typography>
            </CardContent>
        </Card>

        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component= "h2" className={classes.title2}>
                    Acerca de Nosotros
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Lorem ipsum dolor sit amet consectetur.
                </Typography>
            </CardContent>
        </Card>

        <Card className={classes.card}>
            <CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component= "h2" className={classes.title2}>
                    Visión
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Lorem ipsum dolor sit amet consectetur.
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

            </div>
            </div>


            )


        } 
    }