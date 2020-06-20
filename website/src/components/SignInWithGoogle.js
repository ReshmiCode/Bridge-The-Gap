import React, {useState} from "react";
import "../App.css";
import {GoogleLogin } from 'react-google-login';
import {CLIENT_ID} from '../config';

function SignInWithGoogle() {
    let [signedIn, setSignedIn] = useState(false);
    let [googleID, setGoogleID] = useState('');
  
    const responseGoogleSuccess = (response) => {
      console.log(response);
      setGoogleID(response.Ea);
      setSignedIn(true);
    }
  
    const responseGoogleFail = (response) => {
      console.log(response);
    }
  
    return (
        <button className="button">
            <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign In With Google"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFail}ß
            cookiePolicy={'single_host_origin'}
            theme = "dark"
            />
        </button>
    );
  }
  
  export default SignInWithGoogle;