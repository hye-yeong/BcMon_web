import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
//import classNames from "classnames";
//import { Row, Col } from "reactstrap";

class ddos extends React.Component {
    render() {
      
        return (
            <>
                <div className="content">
                    <h2 className="text-center">DDos Detection<br /><br /></h2>
                        <div className="content">
                            <iframe title="Bitcoin DDos" src="http://163.152.223.12:5001/Analysis/Detection" height="1300px" width="100%">
                            </iframe>  
                        </div>         
                </div>
            </>
        );
    }
}

export default ddos;

