import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        fontFamily: 'Nunito',
        
        

        
    },
    title: {
        fontSize: '3rem',
        fontFamily: 'Nunito',
        color: '#fff',
        justifyContent: 'center',
        TextAlign: 'center',
        alignItems: 'top',
        display: 'flex',
        margin: '10%',
    },
    content: {
        
        justifyContent: 'center',        
        alignItems: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito',
        TextAlign: 'center',
        display: 'flex',
        margin: '10%',
       
    },
    content2: {
        alignItems: 'center',
        fontFamily: 'Nunito',
        margin: '10%',
        background: 'none',
        width: '50',

    },

        


    }
));
export default function () {
    const classes= useStyles();
    const responseFacebook = (response) => {
        console.log(response);

    }
    const responseGoogle = (response) => {
            console.log(response);
    }

    return <div className={classes.root} id="login">

             <div>
             <h1 className={classes.title}>Ingresa Ahora</h1>;
             </div>
                 <div className={classes.content}><FacebookLogin
                     appId="823378155159729"
                     fields="name,email,picture"
                     textButton="Ingresa con Facebook"
                     callback={responseFacebook} />
                 </div>

                 <div className={classes.content}> <GoogleLogin
                     clientId="737999626252-fr4jekmervv7uin4eopv2rvcqunp0fl9.apps.googleusercontent.com"
                     buttonText="Ingresa con Google"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={'single_host_origin'}/> 
                     </div>


             
             
             </div>
             
           
       
           
    
    
}