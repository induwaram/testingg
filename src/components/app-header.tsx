/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

import React, { FunctionComponent, ReactElement } from "react";
import { Avatar } from "rsuite";
import "../assets/styles/headerStyles.css";
import "rsuite/styles/index.less"; 
import "rsuite/dist/rsuite.min.css";
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
        [ "data-componentid" ]:testID
    }= props;

    return(
        <div data-componentId={ `${ testID }-app-header` }>
            <div className="header"></div>
            <div className="pic">
                <Avatar size="lg"  circle style={ { background:"orange",height:100, width:100 } }>profile</Avatar>
            </div>
        </div>  
    );
};
