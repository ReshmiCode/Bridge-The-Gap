import React, {useState} from "react";
import "../App.css";
import {GoogleLogin } from 'react-google-login';
import { withRouter } from 'react-router-dom';
import {CLIENT_ID} from '../config';

const  SignInWithGoogle = props => {
    let [signedIn, setSignedIn] = useState(false);
    let [googleID, setGoogleID] = useState('');
  
    const responseGoogleSuccess = (response) => {
      //console.log(response);
      setGoogleID(response.Ea);
      setSignedIn(true);
      props.history.push("/profile");
    }
  
    const responseGoogleFail = (response) => {
      console.log(response);
    }
  
    return (
        <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign In With Google"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFail}ß
            cookiePolicy={'single_host_origin'}
            theme = "dark"
        />
    );
  }
  
  export default withRouter(SignInWithGoogle);