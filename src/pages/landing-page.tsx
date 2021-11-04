/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement} from "react";
import { Container, Content, Footer } from "rsuite";
import { AppHeader } from "../components";
import { IdentifiableComponentInterface } from "../models/core";

/**
 * Application Landing page props interface.
 */
export type LandingPropsInterface = IdentifiableComponentInterface;

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
        [ "data-componentid" ]: componentId
    } = props;

    return(
        <div data-componentId = { componentId }>
            <Container>
                <AppHeader />
                <Content> 
                    <div>
                        <div className="header-landing">
                            <div className="welcome-text-landing">
                                <p>Hey There,  Welcome to Asgardeo Playground !</p>
                            </div>
                        </div>
                        <p className="body-text-landing">You can visit <span style={ { color:"#FF7300" } }>
                            console</span> to make an account and try out the playground </p>
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
