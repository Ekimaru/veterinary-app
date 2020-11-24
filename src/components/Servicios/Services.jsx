import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import ImageCard from './ImageCard'
import ServiceCards from '../../static/ServiceCards'

const useStyles = makeStyles((theme) => ({
    root: {
        minheight: '100vh',
        
    },
    title: {
        fontSize: '3rem',
        fontFamily: 'Nunito',
        color: '#fff',
        justifyContent: 'center',
        TextAlign: 'center',
        alignItems: 'top',
        display: 'flex',
        margin: '5%',
    },


}));

export default function () {
    const classes = useStyles();
    return (
        <div className={classes.root} id="services">
            <h1 className={classes.title}>Services</h1>
            <ImageCard place={ServiceCards[0]} />
            <ImageCard place={ServiceCards[1]} />
            <ImageCard place={ServiceCards[2]} />
            
        </div>
    );
};
