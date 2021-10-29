/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { AuthProvider, SecureRoute } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement, useEffect } from "react";
import { Redirect, Route, BrowserRouter as Router } from "react-router-dom";
import { HomePage, LandingPage } from "./pages";

const APP_CLIENT_ID_STORAGE_KEY: string = "APP_CLIENT_ID";

/**
  * Main App component.
  *
  * @return {React.Element}
  */
export const App: FunctionComponent = (): ReactElement => {
 
    const clientIDSearchParam: string = new URL(window.location.href).searchParams.get("client_id") as string;

    /**
     * Use effect to capture the client ID
     */
    useEffect(() => {
        if (!clientIDSearchParam) {
            return;
        }

        window.sessionStorage.setItem(APP_CLIENT_ID_STORAGE_KEY, clientIDSearchParam);
    },[ new URL(window.location.href).searchParams.get("client_id") ]);

    /**
     * function component for the secured route
     */
    const SecureRouteWithRedirect: FunctionComponent<{component: any, path: string, exact: boolean}> = 
    (props): ReactElement => {
        const { component, path } = props;
    
        const callback = () => {
            <Redirect to="/test" />;
        };
    
        return (<SecureRoute exact path={ path } component={ component } callback={ callback } />);
    };
    
    return (
        <AuthProvider
            fallback={ <LandingPage/> }
            config={ {
                clientID: window.sessionStorage.getItem(APP_CLIENT_ID_STORAGE_KEY) as string,
                scope: ["openid", "profile"],
                serverOrigin: "https://stage.api.asgardeo.io/t/wsow",
                signInRedirectURL: "http://localhost:3000/",
                signOutRedirectURL: "http://localhost:3000/"
            } }
        >
            <Router>
                <Route path="/" exact>
                    <LandingPage />
                </Route>
                <SecureRouteWithRedirect exact path="/home" component={ HomePage } />
            </Router>
        </AuthProvider>
    );
};


