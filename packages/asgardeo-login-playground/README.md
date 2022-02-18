# WSO2 Asgardeo Login Playground


### File Structure 
```
asgardeo-playground/
 ├── node_modules/                  * contains dependencies pulled from npm.
 ├── public/                        * generated public folder for distribution.
 ├── src/                           * source folder
 │   ├── assets/                    
 │   │   └── images/                * images and icons.
 |   |   └── styles/                * stylings.
 │   ├── api                        * contains api calls
 |   ├── components                 * shared reusable components.
 │   ├── layouts                    * app layouts.
 │   ├── models                     * typescript schemas.
 │   ├── pages                      * app pages.
 │   └── types                      * custom typings.
 ├── static                         * contains static assets that needs to be copied to public  folder.
 ├── .eslintignore                  * files and folders that need to be ignored from linter.
 ├── .eslintrc.js                   * es-lint configuration file.
 ├── .gitignore                     * contains files that are ignored from git
 ├── LICENSE.md                     * licensing information.
 ├── package.json                   * contains all the npm scripts for building, running, deploying etc. and contains all the dependencies
 ├── package.lock.json              * lock file for npm.
 ├── README.md                      * Readme file for the repository
 └── tsconfig.json                  * typescript configuration file.

```