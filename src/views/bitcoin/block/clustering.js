import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
// import classNames from "classnames";

class clustering extends React.Component {
    render() {
      
        return (
            <>
                <div className="content">
                    <h2 className="text-center">Clustering<br /><br /></h2>
                    <div className="content">
                        <iframe title="Bitcoin clustering" src="http://163.152.223.12:5001/Analysis/Clustering" height="1200px" width="100%" border="none">
                        </iframe>     
                    </div>   
                </div>
            </>
        );
    }
}

export default clustering;

