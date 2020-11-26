import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea'
import useWindowPosition from '../hook/useWindowPosition';



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
           fontFamily: 'Nunito',
           fontSize: '1.5rem',
           color: '#ddd',
       }
}))



    export default function () {
        const classes= useStyles();
        const checked = useWindowPosition('header'); {            
         
            return (
            <div className={classes.root} id="about">
                <h1 className={classes.title} >Acerca de Nosotros</h1>

           

            <div className={classes.content}>

            <Card className={classes.card} checked={checked}>
            <CardContent>
                <Typography gutterBottom variant="h5" component= "h2" className={classes.title2}>
                    Misión
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Nuestra misión está enfocada en establecer un conjunto de técnicas especializadas para todas las mascotas, poder brindarles una calidad de vida sinigual y garantizarle a nuestros clientes calidad y confianza en nuestros servicios.
                </Typography>
            </CardContent>
        </Card>

        <Card className={classes.card} checked={checked}>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Nuestro equipo de trabajo está complementado por profesionales de alto empeño y sentido de importancia hacia el bienestar de las mascotas, nos gusta lo que hacemos y lo hacemos con el mayor cariño y amor que merece tu compañero.
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
                Queremos lograr de aquí al año 2030 un renombre en cuanto a lo que se refiere a los cuidados de las mascotas, que seamos una marca celebre con distintos tipos de servicios enfocados tanto en la salud de los animales a cargo del cuidado de las familias, como a actividades de aprendizaje y diversión para todos.
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>

            </div>
            </div>


            )


        } 
    }