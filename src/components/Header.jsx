import React, { useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, Box, Collapse} from '@material-ui/core';
import Logo from './../assets/svg/logo.svg'
import SimpleMenu from './SimpleMenu'


const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'top',
        textAlign: 'center',
        height: '100vh',
        fontFamily: 'Nunito',


    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },

    icon: {
        color: '#fff',
        fontSize: '4rem',
    },
    logo: {

        width: '20%',
        
        
    },
    colorText: {
        color: '#5AFF3D',
        fontFamily:'Nunito',
        fontSize: '8rem'

    },
    title: {
        color: '#fff',
        fontSize: '3rem',
        textAlign: 'left',

    },
    minititle: {
        fontSize: '3rem',
    },
    menuitem: {
        flexGrow: '1',
    },
    hiddenitem: {
        flexGrow: '1',

    }
    
    }
))

export default function Header() {
    const classes = useStyles();
   
    return (
        <div className={classes.root}>
    
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar>
                {/* <h1 className={classes.appBarTitle}>Best Friends Veterinary</h1> */}
                <Box className={classes.logo}><img src={Logo}/></Box>
                <Box className={classes.hiddenitem}></Box>
                <SimpleMenu/>
            </Toolbar>

        </AppBar>
        
        
        

        <div>
            
            <h1 className={classes.title}>
                Welcome to <br/> 
                <span className={classes.colorText}>Best Friends </span><span className={classes.minititle}>Veterinary</span>
            </h1>
            
        </div>

        

        </div>




    )
}