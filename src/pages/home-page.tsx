/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement } from "react";
import { Avatar, Button, Container, Content, Footer } from "rsuite";
import "../assets/styles/index.css";
import "rsuite/styles/index.less"; 
import "rsuite/dist/rsuite.min.css";
import { AppHeader } from "../components";
import { IdentifiableComponentInterface } from "../models/core";

/**
 * Application home page props interface.
 */
export type HomePagePropsInterface = IdentifiableComponentInterface;

/**
 * Application Header component.
 *
 * @param {HomePagePropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */

export const HomePage: FunctionComponent<HomePagePropsInterface> = (
    props: HomePagePropsInterface
): ReactElement => {

    const {
        [ "data-componentid" ]: componentId
    }= props;

    /**
     * function for the on logout click
     */
    const onLogout = () => {
        window.close();
    };

    return(
        <div data-componentId={ componentId }>
            <Container>
                <AppHeader />
                <Content>
                    <div className="header-home"></div>
                    <div className="pic">
                        <Avatar size="lg" circle style={ { background:"orange",height:100,width:100 } }>
                                profile</Avatar>
                    </div>
                    <p className="body-text-home">You have successfully logged in to the application! </p>
                    <div className="claim-box">claim details</div>
                    <div className="button-home">
                        <Button onClick={ onLogout } appearance="primary"
                            style={ {
                                backgroundColor:"#FF7300"
                            } }>Log Out</Button>    
                    </div>
                </Content>
                <Footer>
                    <div className="footer">
                        Powered By Asgardeo | 2021
                    </div>
                </Footer>
            </Container>
        </div>  
    );
};
