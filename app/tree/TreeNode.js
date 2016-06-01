import React, { Component } from 'react';
import {render} from 'react-dom';
import {ConnectorTop, ConnectorBottom} from './Connectors'; 
var classNames = require('classnames');

class TreeNode extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            expand: this.props.depth < this.props.level ? true : false
        }
    }
    toggleNode() {
        this.setState({expand : !this.state.expand});
    }
    render() {
        let childNodes, classObj, connectorTop, connectorBottom, childLength, nodeClasses;       
        let level = this.props.level;
        let newDepth = this.props.depth;
        var _this = this;
        childLength = this.props.node.childNodes.length;
        
        let isEmpty = (childLength == 0) ? true : false;
        console.log("Childlength ->"+ this.props.childLength+"--"+ isEmpty);
        nodeClasses = classNames({
            'node': true,
            'empty': isEmpty
        })
        
        if (this.props.node.childNodes != null && this.props.node.childNodes.length > 0 && this.state.expand) {
            newDepth++;    
            
            childNodes = this.props.node.childNodes.map(function(node, index) {
                return  <td colSpan="2" className="node-container">
                            <TreeNode node={node} key={index} length = {childLength} depth={newDepth} level={level}/>
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
                            <div className={nodeClasses} onClick={this.toggleNode.bind(this)}>
                                <h5>{this.props.node.id}</h5>
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