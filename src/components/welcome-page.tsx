/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React from "react";
import "../assets/styles/welcomePage.css";

export const WelcomePage :React.FC =() =>{
    return(
        <div>
            <div className="header">
                <div className="welcomeText">
                    <p>Hey There,  Welcome to Asgardeo Playground !</p>
                </div>
            </div>
            <p className="bodyText">You can visit <span style={ { color:"#FF7300" } }>console</span> to make an account 
            and try out the playground </p>
        </div>
    ); 
};
