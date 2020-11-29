import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from "react";
// import classNames from "classnames";

class nodeDiscovery extends React.Component {
    render() {

        return (
            <>
                <div className="content">
                    <h2 className="text-center">Node discovery<br /><br /></h2>
                    <div className="content">
                        <iframe title="Bitcoin Node Discovery" margin="10px" src="http://141.223.124.8:1201/demo.html" height="860px" width="100%" border="none">
                        </iframe>
                    </div>
                </div>
            </>
        );
    }
}

export default nodeDiscovery;
