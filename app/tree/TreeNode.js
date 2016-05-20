import React, { Component } from 'react';
import {render} from 'react-dom';
import {ConnectorTop, ConnectorBottom} from './Connectors'; 

class TreeNode extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            expand: true
        }

    }
    toggleNode() {
        this.setState({expand : !this.state.expand});
    }
    render() {
        var childNodes, classObj, connectorTop, connectorBottom;
        var childLength;
        if (this.props.node.childNodes != null && this.state.expand) {
            childLength = this.props.node.childNodes.length;
            childNodes = this.props.node.childNodes.map(function(node, index) {
                return  <td colSpan="2" className="node-container">
                            <TreeNode node={node} key={index} length = {childLength}/>
                        </td>
            });
            var colspan = childLength*2;
            connectorTop = <ConnectorTop colspan = {colspan}/> 
            connectorBottom = <ConnectorBottom childNodes = {this.props.node.childNodes}/>
        }
        

        return (                    
            <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                    <tr  className= "node-cells">
                        <td className="node-cell" colSpan={childLength == undefined ? 2 : childLength*2}>
                            <div className="node" onClick={this.toggleNode.bind(this)}>
                                <h5>{this.props.node.title}</h5>
                            </div> 
                        </td>
                    </tr>                         
                    {connectorTop}   
                    {connectorBottom}                       
                    <tr>
                        {childNodes} 
                    </tr>
                </tbody>                        
            </table>
        );
      }
    
};
export default TreeNode