import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SortIcon from '@material-ui/icons/Sort'
import { makeStyles} from '@material-ui/core/styles';

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
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>Shop</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
      </Menu>
    </div>
  );
}
