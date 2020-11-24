import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'

const useStyles = makeStyles({
    root: {
      maxWidth: 645,

    },
    media: {
     height: 400,
     width: 650,
    },
    tittle: {
      fontFamily: 'Nunuto',  
    }
});

export default function ImageCard({place}) {
    const classes = useStyles();
  
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={place.imageUrl}
                  tittle="General Consultation"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component= "h2" className={classes.title}>
                    {place.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {place.description}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
  }