/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement, useEffect } from "react";
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
 * Main App component.
 *
 * @return {React.Element}
 */
export const App: FunctionComponent = (): ReactElement => {
 
    const clientIdSearchParam: string = new URL(window.location.href).searchParams.get("client_id") as string;
    const tenant : string = new URL(window.location.href).searchParams.get("org") as string;

    /**
     * Use effect to capture the client ID
     */
    useEffect(() => {
        if (!clientIdSearchParam) {
            return;
        }

        window.sessionStorage.setItem(APP_CLIENT_ID_STORAGE_KEY, clientIdSearchParam);
        window.sessionStorage.setItem(APP_TENANT_STORAGE_KEY, tenant);
    }, [ new URL(window.location.href).searchParams.get("client_id") ]);
    
    return (
        window.sessionStorage.getItem(APP_CLIENT_ID_STORAGE_KEY)
            ? (
                <AppWithClientIdentifier clientId={ window.sessionStorage.
                    getItem(APP_CLIENT_ID_STORAGE_KEY) as string } tenant= { window.sessionStorage.
                        getItem(APP_TENANT_STORAGE_KEY) as string } />
            )
            : <LandingPage />
    );
};
