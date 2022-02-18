/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement } from "react";
import { Button, Header } from "rsuite";
import logo from "../assets/images/branding/asgardeo-logo.svg";
import { IdentifiableComponentInterface } from "../models/core";

/**
 * Application Header props interface.
 */

 interface HeaderPropsInterface extends IdentifiableComponentInterface {
    isLoggedOut: boolean;
}

/**
 * Application Header component.
 *
 * @param {AppHeaderPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const AppHeader: FunctionComponent<HeaderPropsInterface> = (
    props: HeaderPropsInterface
): ReactElement => {

    const {
        isLoggedOut,
        [ "data-componentid" ]: componentId
    }= props;
 
    /**
     * callback handler for the logo click event
     */
    const onLogoClick = () => {
        window.open(process.env.REACT_APP_DOCS_URL);
    };

    return(
        <Header data-componentId={ componentId } >
            <div>
                <img src ={ logo } className="logo" onClick={ onLogoClick }></img>
                <span className="logo-text">Playground</span>
            </div>
            { isLoggedOut 
                ?
                <></>
                :<Button
                    className="header-button"  
                    color="orange" 
                    appearance="ghost" 
                    onClick={ () => window.open(process.env.REACT_APP_DOCS_URL) }  
                >
                Go to Asgardeo
                </Button> 
            }
        </Header>
    );
};
