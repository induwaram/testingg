/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import { useAuthContext } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement, useState } from "react";
import { Button, Container, Content, Footer, List, Panel } from "rsuite";
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
     * Desctructuring the context from `useAuthContext` hook.
     */
    const { state, signIn, signOut, getDecodedIDToken } = useAuthContext();
    const [firstName, setfirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const onLogout = () => {
        window.sessionStorage.removeItem("APP_CLIENT_ID");
        window.sessionStorage.removeItem("APP_TENANT");
        signOut();
    };

    //Getting the first name and the last name by decoding ID token
    getDecodedIDToken().then((idToken) => {
        setfirstName(idToken.family_name);
        setLastName(idToken.given_name);
    });

    return(
        <div data-componentId={ componentId }>
            <Container>
                <AppHeader isLoggedOut= { false } />
                <Content>
                    <div className="header-landing">
                        <div className="welcome-text-landing-heading">
                            <p>Hey There!</p>
                        </div>
                        <div className="welcome-text-landing-content">
                            <p> Welcome to Asgardeo Playground!</p>
                        </div>
                    </div>
                    <p className="body-text-home"></p>
                    <div className="claim-box">{
                        state.isAuthenticated
                            ? (
                                <div>
                                    <Panel className="claim-box" header="User Attributes" bordered>
                                        <List className="list" bordered >    
                                            First Name : { firstName } <br></br>
                                            Last Name : { lastName } <br></br>
                                            Email : { lastName } <br></br>
                                        </List>
                                    </Panel>
                                </div>
                            )
                            : <div>
                                <button onClick={ () => signIn() }>Login</button>
                                <div>{ state.username }</div>
                            </div>
                    }
                       
                    </div>
                    <div className="button-home">
                        <Button onClick={ onLogout } appearance="primary"
                            style={ {
                                backgroundColor:"#FF7300"
                            } }>Log Out</Button>    
                    </div>
                </Content>
                <Footer>
                    <div className="footer">
                        <span>&copy;</span> { " " }2022 WSO2
                    </div>
                </Footer>
            </Container>
        </div>  
    );
};
