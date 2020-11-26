import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import { FullscreenExit } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({

    root: {
        height: '100vh',
        fontFamily: 'Nunito',
    },
    content: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        margin: '20px',
      
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
    card: {
        maxWidth: 600,
        height: 820,
        background: 'rgba(0,0,0,0.5)',
        // TextAlign: 'center',
        
        
    },
    desc: {
        // display: 'flex',
        fontFamily: 'Nunito',
        fontSize: '1.2rem',
        color: '#ddd',
        
    },

    card2: {
        maxWidth: 600,
        background: 'rgba(0,0,0,0.5)',
        // marginLeft: '40%',
        // marginTop: '-20%'

    },

    media: {
        height: 300,
        width: 400,        

    },
    card3: {
        maxWidth: 600,
        background: 'rgba(0,0,0,0.5)',
        // marginLeft: '75%',
        // marginTop: '-5%'
    }
}))

export default function () {
    const classes= useStyles(); 
  
        
   
    return (

        <div className={classes.root}>

            <div className= {classes.title} id={"consultaGeneral"}> Consulta General</div>
        
        <div className={classes.content}>

        <Card className={classes.card}>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Propiciamos un escenario amigable con tus mascotas, donde al interactuar con ellas, identificamos, diagnosticamos y te ayudamos a resolver los problemas de salud que presenten.<p/>
                 
                 <h2>Algunos motivos de consulta veterinaria más habituales en las mascotas son:</h2>
                 <ul>
                   <li>pérdida de pelaje</li>
                   <li>Lesiones en piel</li>
                   <li>Rascado excesivo</li>
                   <li>Inapetencia, Vómito y Diarrea</li>
                   <li>Oidos sucios y con mal olor</li>
                   <li>Tos y dificultad respiratoria</li>
                   <li>Ojos con aumento de lagrimeo</li>
                   <li>Problemas de agresión o de comportamiento</li>
                   <li>Dificultades para moverse, entre muchos otros…</li>
                 </ul>
                </Typography>
            </CardContent>
        </Card>

        <div>

        <Card className={classes.card2}>
            <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={process.env.PUBLIC_URL + '/assets/general_1.jpg'}
                  title="General Consultation"
                />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Trabajamos con profesionales altamente calificados.
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Compartir
                </Button>
            </CardActions>
        </Card>

        <Card className={classes.card3}>
            <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={process.env.PUBLIC_URL + '/assets/general_2.jpg'}
                  title="General Consultation"
                />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                Trabajamos con todos los protocolos de bioseguridad.
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Compartir
                </Button>
            </CardActions>
        </Card>

        </div>
            
            
            
            
        </div>



        

        </div>

       
    )
}