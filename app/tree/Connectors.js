import React, { Component } from 'react';
import {render} from 'react-dom';

export class ConnectorTop extends Component {
    render() {
        return (
            <tr><td colSpan={this.props.colspan}><div className="line down"></div></td></tr>
        )
    }
};

export class ConnectorBottom extends Component {
    render() {
        var connectors = [];
        var length = this.props.childNodes.length - 1
        for(var i = 0; i < length; i++ ){
            connectors.push(<td className="line right top" key={i}>&nbsp;</td>);
            connectors.push(<td className="line left top" >&nbsp;</td>);
            
        }
        return (
            <tr>
                <td className="line left">&nbsp;</td>
                {connectors}
                <td className="line right">&nbsp;</td>
            </tr>
        )
    }
};