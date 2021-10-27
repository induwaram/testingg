/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement } from "react";
import "../assets/styles/index.css";
import "rsuite/dist/rsuite.min.css";
import { Button, FlexboxGrid, Header } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import logo from "../assets/images/branding/asgardeo-logo.svg";
import { IdentifiableComponentInterface } from "../models/core";

/**
 * Application Header props interface.
 */
export type HeaderPropsInterface = IdentifiableComponentInterface;

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
        [ "data-componentid" ]: componentId
    }= props;
 
    /**
     * function for the on Log out click
     */
    const onLogoClick = () => {
        window.open("https://wso2.com/asgardeo/");
    };

    return(
        <Header data-componentId={ componentId } >
            <FlexboxGrid>
                <FlexboxGridItem colspan={ 23 }>
                    <img src ={ logo } className="logo" onClick={ onLogoClick }></img>
                </FlexboxGridItem>
                <FlexboxGridItem>
                    <Button appearance="primary">Docs</Button>
                </FlexboxGridItem>
            </FlexboxGrid>    
        </Header>
    );
};
