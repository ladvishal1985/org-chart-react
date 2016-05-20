import React, { Component } from 'react';
import {render} from 'react-dom';
import TreeNode from './TreeNode';
let data = [
    {  "id": 1, "type": "nisl.", "number": "eleifend", "balance": "28062", "parent": "", "currency": "GBP" },
    {  "id": 2, "type": "non", "number": "id,", "balance": "24983", "parent": "1", "currency": "USD" },
    {  "id": 3, "type": "nec,", "number": "lacinia", "balance": "9426", "parent": "2", "currency": "GBP" },
    {  "id": 4, "type": "dui,", "number": "interdum", "balance": "55904", "parent": "2",  "currency": "GBP" },
    {  "id": 5, "type": "montes,", "number": "in", "balance": "13244", "parent": "2", "currency": "GBP" },
    {  "id": 6, "type": "sem", "number": "in", "balance": "66450", "parent": "4", "currency": "EUR" },
    {  "id": 7, "type": "nulla", "number": "felis.", "balance": "17288", "parent": "6", "currency": "EUR" },
    {  "id": 8, "type": "eget,", "number": "ipsum", "balance": "15873", "parent": "3", "currency": "EUR" },
    {  "id": 9, "type": "nec", "number": "mollis.", "balance": "97959", "parent": "3", "currency": "EUR" },
    {  "id": 10, "type": "Donec", "number": "nulla", "balance": "24513", "parent": "9", "currency": "USD" },
    {  "id": 11, "type": "metus", "number": "lacinia", "balance": "99158", "parent": "3", "currency": "GBP" }
]
let tree = {
  "title": "howdy",
  "childNodes": [
    {"title": "bobby"},
    {"title": "suzie", "childNodes": [
            {"title": "puppy", "childNodes": [
                {"title": "dog house"},
                {"title": "cat house"}
                ]
            },
            {"title": "cherry tree"},
        ]
    },
    {"title": "jerry"}
  ]
};
class TreeContainer extends Component {
	
	render() {
		let depth = 0, showLevel = 2;
        return (
            <TreeNode node={tree} depth={depth} showLevel= {showLevel}/>
        ) 
        
    }
}

export default TreeContainer ;
