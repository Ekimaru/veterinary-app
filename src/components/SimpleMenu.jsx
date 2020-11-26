import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort'
import { makeStyles} from '@material-ui/core/styles';
import {Link as Scroll} from 'react-scroll';
import Login from './Login'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#fff',
    fontSize: '4rem',
    flexGrow: '1',

  },
  menu: {
    width: '100%',
  }

}))


export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const classes=useStyles();
  const handleClose = () => {
    setAnchorEl(null);
    
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
       <SortIcon className={classes.icon} />
      </IconButton>
      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Scroll to="home" smooth={true} offset={-300}>
        <MenuItem onClick={handleClose}>Inicio</MenuItem>
        </Scroll>
        <Scroll to="about" smooth={true} offset={-100}>
        <MenuItem onClick={handleClose}>Acerca de Nosotros</MenuItem>
        </Scroll>
        <Scroll to="services" smooth={true} offset={-100}>
        <MenuItem onClick={handleClose}>Servicios</MenuItem>
        </Scroll>
        <MenuItem onClick={handleClose}>Tienda</MenuItem>
        <MenuItem onClick={handleClose}>Contáctanos</MenuItem>
        <Scroll to="login" smooth={true} offset={-60}>
        <MenuItem onClick={handleClose}>Ingresar</MenuItem>
        </Scroll>
      </Menu>
    </div>
  );
}
