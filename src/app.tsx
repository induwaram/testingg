/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { ReactElement } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { LandingPage } from "./pages";

/**
 * Main App component.
 *
 * @return {React.Element}
 */
export const App = (): ReactElement => {

    return (
        <div>
            <Router>
                <Route path="/" exact>
                </Route>
                <Route path="/landing" >
                    <LandingPage />
                </Route>
            </Router>
        </div>
    );
};
