/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { useAuthContext } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement, useEffect } from "react";
import { Redirect } from "react-router";
import { Loader } from "rsuite";
import { IdentifiableComponentInterface } from "../models/core";
 
/**
 * Application Landing page props interface.
 */
export interface LandingPropsInterface extends IdentifiableComponentInterface {
    /**
	 * Client Identifier of the application.
	 */
     clientID: string;
 }
 
/**
 * Landing page
 *
 * @param {LandingPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const LoginPage: FunctionComponent<LandingPropsInterface> =(
    props: LandingPropsInterface
): ReactElement => {
  
    const {
        clientID,
        ["data-componentid"]: componentId
    } = props;
 
    /**
     * Desctructuring the context from `useAuthContext` hook.
     * 
     */
    const { state, signIn } = useAuthContext();
 
    /**
     * Use effect to capture the client ID
     */
    useEffect(() => {
        if (!clientID) {
            return;
        }
        
        signIn();
    },[ clientID ]);
 
    return(
        <div data-componentId = { componentId }>
            {
                state.isAuthenticated
                    ? (
                        <div>   
                            <Redirect to="/home"></Redirect>
                        </div>
                    )
                    :<Loader backdrop content="Loading.." />
            }
        </div>
    );
};
