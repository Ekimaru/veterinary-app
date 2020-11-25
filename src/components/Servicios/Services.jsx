import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import ImageCard from './ImageCard'
import ServiceCards from '../../static/ServiceCards'

const useStyles = makeStyles((theme) => ({
    root: {
        minheight: '100vh',
        display: 'flex',
        justifyCOntent:'center',
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
        // margin: '10%',
    },


}));

export default function () {
    const classes = useStyles();
    return (
        <div><h1 className={classes.title} id="services">Services</h1>
        <div className={classes.root} >
            
            <ImageCard place={ServiceCards[0]} />
            <ImageCard place={ServiceCards[1]} />
            <ImageCard place={ServiceCards[2]} />
            
            
        </div>
        </div>
    );

};
