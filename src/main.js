import {createElement, createTextNode, appendChild} from './createElement.js'

let div = createElement('div')
let textNode = createTextNode('hello webpack')
let node = appendChild(div, textNode)
appendChild(document.body, node)