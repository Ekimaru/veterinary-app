import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {withWidth, Typography, Hidden, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({ 

    hidden: {
        background: 'none',
        fontFamily: 'Nunito',

    }}
))

   function HiddenApp(props) {
        const classes = useStyles();
        return (
        <div className={classes.hidden}>
            <Typography variant="h6" color="initial">
                Ancho: {props.width}
            </Typography>

            <Hidden xsDown>
                <Button variant="contained" color="primary">
                  xs
                </Button>
            </Hidden>
        </div>
    )
}

export default withWidth()(HiddenApp)
