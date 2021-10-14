/* eslint-disable quotes */
/* eslint-disable max-len */
import React from 'react';
import '../assets/styles/welcomePage.css';

export const WelcomePage :React.FC =() =>{
    return(
        <div>
            <div className="header">
                <div className="welcomeText">
                    <p>Hey There,  Welcome to Asgardeo Playground !</p>
                </div>
            </div>
            <p className="bodyText">You can visit <span style={{color:'#FF7300'}}>console</span> to make an account and try out the playground </p>
        </div>
    ); 
};
