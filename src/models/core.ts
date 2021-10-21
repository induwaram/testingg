/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.com). All Rights Reserved.
 *
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 * You may not alter or remove any copyright or other notice from copies of this content."
 */

/**
  * Alert interface.
  */
export interface AlertInterface extends Notification {
     /**
      * Description for the alert.
      */
     description: string;
 }
 
/**
  * Enum for Alert levels.
  *
  * @readonly
  * @enum {string}
  */
export enum AlertLevels {
     /**
      * Success alert level.
      *
      * @type {string}
      */
     SUCCESS = "success",
     /**
      * Error alert level.
      *
      * @type {string}
      */
     ERROR = "error",
     /**
      * Info alert level.
      *
      * @type {string}
      */
     INFO = "info",
     /**
      * Warning alert level.
      *
      * @type {string}
      */
     WARNING = "warning"
 }
 
/**
  * Interface for the runtime config.
  * TODO: Remove this and use the ones passed from portals.
  * @deprecated
  */
export interface RuntimeConfigInterface {
     /**
      * Name of the application. ex: "Console, My Account etc.".
      */
     applicationName?: string;
     /**
      * Client host. ex: "https://localhost:9000".
      */
     clientHost?: string;
     /**
      * Client ID. ex: "USER_PORTAL" or "OBkfXrmKCvulIt0fIs6UOYVZd34a".
      */
     clientID?: string;
     /**
      * Copyright text to be displayed on footer.
      */
     copyrightText?: string;
     /**
      * Login callback URL. ex: "https://localhost:9000/<PORTAL>/login".
      */
     loginCallbackUrl?: string;
     /**
      * Server host. ex: "https://localhost:9443".
      */
     serverHost?: string;
     /**
      * Product title. ex: "WSO2 Identity Server".
      */
     titleText?: string;
 }
 
/**
  * Common interface to extend testable components.
  * @deprecated
*/
export interface TestableComponentInterface {
     /**
      * Unit test id.
      */
     "data-testid"?: string;
}
 
/**
  * Common interface to extend identifiable components.
 */
export interface IdentifiableComponentInterface {
     /**
      * Unique component id.
     */
    "data-componentid"?: string;
}
 
/**
  * Common interface to be extended to for components having loading capability.
  */
export interface LoadableComponentInterface {
     /**
      * Flag for loading state.
      */
     isLoading?: boolean;
 }
