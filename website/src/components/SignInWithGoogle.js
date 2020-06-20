import React, {useState} from "react";
import "../App.css";
import {GoogleLogin } from 'react-google-login';
import { withRouter } from 'react-router-dom';
import {CLIENT_ID} from '../config';

let GLOBAL = require("../global");
const axios = require("axios").default;

const  SignInWithGoogle = props => {

    const newProfile = (googleProfile) => {
      const newUser = {
        googleID: googleProfile.googleId,
        userName: googleProfile.name,
        profilePic: googleProfile.imageUrl,
        email: googleProfile.email
      };

      axios.get(`https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/${GLOBAL.googleID}`)
        .then(function (response) {
          if (response.data.data.length === 0) {
            console.log("newUser = ", newUser);
            axios.post("https://mlh-bridge-the-gap.wl.r.appspot.com/api/v1/users/", newUser)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          } 
        })
        .catch(function (error) {
          console.log(error);
        })
    };
  
    const responseGoogleSuccess = (response) => {
      console.log(response);
      GLOBAL.googleID = response.googleId;
      newProfile(response.profileObj);
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