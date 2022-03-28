/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement } from "react";
import { Container, Content, Footer } from "rsuite";
import { AppHeader } from "../components";
import { IdentifiableComponentInterface } from "../models/core";

/**
 * Application Landing page props interface.
 */
interface LandingPropsInterface extends IdentifiableComponentInterface{
    isLoggedOut: boolean;
}

/**
 * Landing page
 *
 * @param {LandingPropsInterface} props - Props injected to the component.
 * @return {React.ReactElement}
 */
export const LandingPage: FunctionComponent<LandingPropsInterface> =(
    props: LandingPropsInterface
): ReactElement => {
 
    const {
        isLoggedOut,
        [ "data-componentid" ]: componentId
    } = props;

    return(
        <div data-componentId = { componentId }>
            <Container className="body-bg">
                <AppHeader isLoggedOut= { isLoggedOut }/>
                <Content> 
                    <div>
                        <div className="header-landing">
                            <div className="welcome-text-landing-heading">
                                <p>Hey There!</p>
                            </div>
                            <div className="welcome-text-landing-content">
                                <p> Welcome to Asgardeo Playground!</p>
                            </div>
                        </div>
                        <div className="landing-illustration">
                        </div>
                        { !isLoggedOut 
                            ?(
                                <p className="body-text-landing">
                                    If you dont have an Asgardeo Account , you can register for one from { " " }  
                                    <a style={ { color:"#FF7300" } } 
                                        onClick={ () => window.open(process.env.REACT_APP_DOCS_URL) }>
                                            here.</a> <br></br></p>
                            ): <p className="body-text-landing">You have logged out Successfully!</p>       
                        }
                    </div>
                </Content>
                <Footer>
                    <div className="footer">
                        <span>&copy;</span> { " " } 2022 WSO2 
                    </div>
                </Footer>
            </Container>
        </div>
    );
};
