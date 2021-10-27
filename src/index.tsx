/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { AuthProvider } from "@asgardeo/auth-react";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

ReactDOM.render(
    <AuthProvider
        config={ {
            clientID: "IMnXnK9D98XYlv06lNG_fkawrXAa",
            scope: [ "openid","profile" ],
            serverOrigin: "https://stage.api.asgardeo.io/t/wsow",
            signInRedirectURL: "http://localhost:3000/",
            signOutRedirectURL: "http://localhost:3000/"   
        } }
    >
        <React.StrictMode>
            <App />
        </React.StrictMode> 
        
    </AuthProvider>,
    document.getElementById("root")
);
