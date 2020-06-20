import React from 'react';
import './App.css';
import SignInWithGoogle from './components/SignInWithGoogle';

function HomePage() {
  return (
    <div className="App">
        <h1> Bridge The Gap </h1>
        <p> Blah Blah  Blah </p>
        <SignInWithGoogle/>
        <p> Made with 💖 by Medha Jonnada, Megan Tran, Reshmi Ranjith, and Saloni Shivdasani </p>
    </div>
  );
}

export default HomePage;