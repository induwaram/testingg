import React from 'react';
import { Button ,Avatar} from 'rsuite';
import '../assets/styles/headerStyles.css'
import 'rsuite/styles/index.less'; 
import "rsuite/dist/rsuite.min.css";

export const AppHeader : React.FC = () => {
    return(
        <div>
            <div className="header"></div>
            <div className="pic">
                <Avatar circle style={{background:'orange',height:100, width:100}}>profile</Avatar>
            </div>
            {/* <div className="header-box">
                <p>Hey there !</p>
            </div> */}
        </div>  
    );
};
