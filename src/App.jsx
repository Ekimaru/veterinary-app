import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core'
import Header from './components/Header'
import Login from './components/Login'
import Services from './components/Servicios/Services'

const useStyles = makeStyles((theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/background.jpg"})`,
    backgroundRepeat: "no repeat",
    backgroundSize: "cover",
  }
})));
export default function App() {
  const classes = useStyles();
  return <div className={classes.root}>
    <CssBaseline />
    <Header />
    <Services />
    <Login />
  
    
  </div>;
}