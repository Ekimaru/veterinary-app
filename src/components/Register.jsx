import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        
    },
    title: {
        fontSize: '5rem',
        fontFamily: 'Nunito',
        


    }
}));
export default function () {
    const classes= useStyles();
    return <div className={classes.root}>
        <h1 className={classes.title}>Register</h1>
    </div>;
}