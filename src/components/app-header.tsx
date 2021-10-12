import React from 'react';
import { Button ,Avatar} from 'rsuite';
import '../assets/styles/headerStyles.css'
import 'rsuite/styles/index.less'; 

export const AppHeader : React.FC = () => {
    return(
        <div className="header">
            <div className="header-box">
                <p>Hey there !</p>
            </div>
        </div>
    
    );
};
