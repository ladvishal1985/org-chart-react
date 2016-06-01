import React, { Component } from 'react';
import {render} from 'react-dom';
import TreeNode from './TreeNode';
let data = [
    {  "id": 1, "type": "nisl.", "number": "eleifend", "balance": "28062", "parentid": 0, "currency": "GBP" },
    {  "id": 2, "type": "non", "number": "id,", "balance": "24983", "parentid": 1, "currency": "USD" },
    {  "id": 3, "type": "nec,", "number": "lacinia", "balance": "9426", "parentid": 2, "currency": "GBP" },
    {  "id": 4, "type": "dui,", "number": "interdum", "balance": "55904", "parentid": 2,  "currency": "GBP" },
    {  "id": 5, "type": "montes,", "number": "in", "balance": "13244", "parentid": 2, "currency": "GBP" },
    {  "id": 6, "type": "sem", "number": "in", "balance": "66450", "parentid": 4, "currency": "EUR" },
    {  "id": 7, "type": "nulla", "number": "felis.", "balance": "17288", "parentid": 6, "currency": "EUR" },
    {  "id": 8, "type": "eget,", "number": "ipsum", "balance": "15873", "parentid": 3, "currency": "EUR" },
    {  "id": 9, "type": "nec", "number": "mollis.", "balance": "97959", "parentid": 3, "currency": "EUR" },
    {  "id": 10, "type": "Donec", "number": "nulla", "balance": "24513", "parentid": 9, "currency": "USD" },
    {  "id": 11, "type": "metus", "number": "lacinia", "balance": "99158", "parentid": 3, "currency": "GBP" }
]
let tree;
class TreeContainer extends Component {
	
	unflatten( arr ) {
		var tree = [],
      	mappedArr = {},
      	arrElem,
      	mappedElem; 

		  // First map the nodes of the array to an object -> create a hash table.
		  for(var i = 0, len = arr.length; i < len; i++) {
		    arrElem = arr[i];
		    mappedArr[arrElem.id] = arrElem;
		    mappedArr[arrElem.id]['childNodes'] = [];
		  }


		for (var id in mappedArr) {
		    if (mappedArr.hasOwnProperty(id)) {
		      mappedElem = mappedArr[id];
		      // If the element is not at the root level, add it to its parent array of children.
		    if (mappedElem.parentid) {
		        mappedArr[mappedElem['parentid']]['childNodes'].push(mappedElem);
		    }
		      // If the element is at the root level, add it to first level elements array.
		    else {
		        tree.push(mappedElem);
		      }
		    }
		  }
		  return tree;
	}

	render() {		
		tree = this.unflatten( data );
		console.log(JSON.stringify(tree[0]));
		let depth = 0, level = 1;
        
        return (
            <TreeNode node={tree[0]} depth={depth} level={level} nodeClasses="node"/>
        ) 
        
    }
}

export default TreeContainer ;
