import React, {Component} from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import './App.css';
import '../node_modules/uikit/dist/css/uikit.min.css';

class Root extends Component {
    render() {
        return (
            <div className="uk-container">
                <div className="uk-card uk-card-body uk-card-primary">
                    <h3 className="uk-card-title">Example headline</h3>

                    <button className="uk-button uk-button-default" uk-tooltip="title: Hello World">Hover</button>
                </div>
            </div>
        );
    }

}

export default Root;
