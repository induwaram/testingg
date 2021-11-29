/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { SecureRoute } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { Redirect, RouteProps } from "react-router";
import { IdentifiableComponentInterface } from "../models/core";
 
/**
 * Secure route with redirect  props interface.
 */
export interface SecureRouteWithRedirectPropsInterface extends IdentifiableComponentInterface, RouteProps {}

/**
 * Application secure route with redirect component.
 *
 * @param {SecureRouteWithRedirectPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const SecureRouteWithRedirect: FunctionComponent<SecureRouteWithRedirectPropsInterface> = (
    props: SecureRouteWithRedirectPropsInterface
): ReactElement => {
    const {
        component,
        path
    }= props;
    
    /**
     * callback fucntion for the redirect path
     */
    const callback = () => {
        <Redirect to="/" ></Redirect>;
    };

    return (<SecureRoute exact path={ path } component={ component } callback={ callback } />);
};
