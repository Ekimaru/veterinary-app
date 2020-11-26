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
        margin: '0%',
    },
    title: {
        fontSize: '3rem',
        fontFamily: 'Nunito',
        color: '#fff',
        justifyContent: 'center',
        TextAlign: 'center',
        alignItems: 'top',
        display: 'flex',
        marginTop: '8%',
    },

    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

       
        
       },
       title2: {
           fontFamily: 'Nunito',
           fontWeight: 'bold',
           fontSize: '2rem',
           color: '#fff',  
           textAlign: 'center',
           margin: '10%',
           alignItems: 'center',    
       },
       desc: {
           fontFamily: 'Nunito',
           fontSize: '1.3rem',
           color: '#ddd',
       },
       media: {
        height: 400,
        width: 500,
        margin: '8%',
       }
}))



    export default function () {
        const classes= useStyles(); {            
         
            return (
            <div className={classes.root}>
                <h1 className={classes.title} id="consultaEspecial">Consulta especializada y Urgencias</h1>

           

            <div className={classes.content}>

            <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component= "h2" className={classes.title2}>
                    Consulta especializada
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Una consulta especializada es la revisión médica que se enfoca en tratar sintomatologías específicas en las mascotas por especialistas en las diferentes áreas de la veterinaria; por ejemplo, cirugía, dermatología, odontología, oncología, entre otras áreas de la veterinaria para tratar las afecciones o enfermedades que presentan los animales.
                </Typography>
                <CardMedia
                  className={classes.media}
                  title="Especializaciones"
                  image={process.env.PUBLIC_URL + '/assets/specialist_2.jpg'}
                />
            </CardContent>
        </Card>

        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="h5" component= "h2" className={classes.title2}>
                    Urgencias
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                ATENCIÓN PRIORITARIA: Esta atención se debe dar cuando tu mejor amigo requiere de ayuda especializada pero la enfermedad no permite esperar.
Ejemplos: herida, hemorragia, caída, intoxicación, envenenamiento, vómito, diarrea, atropellamiento, convulsión, pérdida de conocimiento.
                </Typography>
                <CardMedia
                  className={classes.media}
                  title="Urgencia"
                  image={process.env.PUBLIC_URL + '/assets/emergency_2.jpg'}
                  />
            </CardContent>
        </Card>

      

            </div>
            </div>


            )


        } 
    }