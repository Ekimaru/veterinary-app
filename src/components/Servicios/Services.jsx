import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import ImageCard from './ImageCard'
import ServiceCards from '../../static/ServiceCards'
import {Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    
    root: {
        minheight: '100vh',
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
        // margin: '10%',
    },


}));

export default function () {
    const classes = useStyles();
    return (
        <div><h1 className={classes.title} id="services">Servicios</h1>
        <div className={classes.root} >
            <Scroll to="consultaGeneral" smooth={true} offset={-70}>
            <ImageCard place={ServiceCards[0]} />
            </Scroll>
            <Scroll to="consultaEspecial" smooth={true}>
            <ImageCard place={ServiceCards[1]} />
            </Scroll>
            <Scroll to="consultaEspecial" smooth={true}>
            <ImageCard place={ServiceCards[2]} />
            </Scroll>
            
            
            
        </div>
        </div>
    );

};
