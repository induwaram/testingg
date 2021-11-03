/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { AuthProvider } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { SecureRouteWithRedirect } from "./secure-route-with-redirect";
import { HomePage, LandingPage } from "../pages";

/**
 * app with client identifier props interface 
 */
export interface AppWithClientIdentifierPropsInterface {
    clientId: string;
}

/**
 * Main App component.
 *
 * @return {React.Element}
 */
export const AppWithClientIdentifier: FunctionComponent<AppWithClientIdentifierPropsInterface> = (
    props: AppWithClientIdentifierPropsInterface
): ReactElement => {

    const  {
        clientId
    } = props;

    if (!clientId) {
        return <div>No Client ID Defined</div>;
    }

    return (
        <AuthProvider
            fallback={ <LandingPage clientID= { clientId } /> }
            config={ {
                clientID: clientId,
                scope: ["openid", "profile"],
                serverOrigin: "https://stage.api.asgardeo.io/t/wsow",
                signInRedirectURL: "http://localhost:3000/",
                signOutRedirectURL: "http://localhost:3000/"
            } }
        >
            <Router>
                <Route path="/" exact>
                    <LandingPage clientID={ clientId } />
                </Route>
                <SecureRouteWithRedirect exact path="/home" component={ HomePage } />
            </Router>
        </AuthProvider>
    );
};
