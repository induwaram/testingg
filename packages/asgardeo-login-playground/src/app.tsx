/**
 * Copyright (c) 2022, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { AppWithClientIdentifier } from "./components";
import { LandingPage } from "./pages";
 
/**
  * constant to store the client id in storage
  */
const APP_CLIENT_ID_STORAGE_KEY: string = "APP_CLIENT_ID";
/**
  * constant to store the tenant in storage
  */
const APP_TENANT_STORAGE_KEY: string = "APP_TENANT";
/**
  * constant to store the state in storage
  */
const APP_STATE_STORAGE_KEY: string = "APP_STATE";
 
/**
  * Main App component.
  *
  * @return {React.Element}
  */
export const App: FunctionComponent = (): ReactElement => {
    const [
        isClientIdInStorage,
        setIsClientIdInStorage
    ] = useState<boolean>(!!window.sessionStorage.getItem(APP_CLIENT_ID_STORAGE_KEY));
 
    const clientIdSearchParam: string = new URL(window.location.href).searchParams.get("client_id") as string;
    const tenant : string = new URL(window.location.href).searchParams.get("org") as string;
    const [ isLoggedOut, setIsLoggedOut ] = React.useState(false);

 
    /**
      * Hook to update the session storage when the `clientId` and the `org` is available in the URL params.
      */
    useEffect(() => {
        if (!clientIdSearchParam || !tenant) {
            const state : string = new URL(window.location.href).searchParams.get("state") as string;
            window.sessionStorage.setItem(APP_STATE_STORAGE_KEY, state);
            if (window.sessionStorage.
                getItem(APP_STATE_STORAGE_KEY) as string === "sign_out_success"){
                setIsLoggedOut(true);
            }
            return;
        }
 
        window.sessionStorage.setItem(APP_CLIENT_ID_STORAGE_KEY, clientIdSearchParam);
        window.sessionStorage.setItem(APP_TENANT_STORAGE_KEY, tenant);
    }, [ clientIdSearchParam, tenant ]);
 
    /**
      * Hook to update the internal state when the clientId in the storage changes.
      */
    useEffect(() => {
        setIsClientIdInStorage(!!window.sessionStorage.getItem(APP_CLIENT_ID_STORAGE_KEY));
    }, [ isClientIdInStorage ]);
 
    return (
        isClientIdInStorage
            ? (
                <AppWithClientIdentifier clientId={ window.sessionStorage.
                    getItem(APP_CLIENT_ID_STORAGE_KEY) as string } tenant= { window.sessionStorage.
                        getItem(APP_TENANT_STORAGE_KEY) as string } />
            )
            : <LandingPage isLoggedOut= { isLoggedOut } />
    );
};
