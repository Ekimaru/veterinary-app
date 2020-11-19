import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Box } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'
import Logo from './../assets/svg/logo.svg'

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
                <Box mt={5} ml={2} className={classes.logo}><img src={Logo} alt={classes.logo}/></Box>

                <IconButton>
                    <Box ml={180}><SortIcon className={classes.icon} /></Box>
                </IconButton>
            </Toolbar>

        </AppBar>

        <div>
            <Box mt={15}>
            <h1 className={classes.title}>
                Welcome to <br/> 
                <span className={classes.colorText}>Best Friends </span><span className={classes.minititle}>Veterinary</span>
            </h1>
            </Box>
        </div>

        </div>




    )
}