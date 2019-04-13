export const createElement = (tag) => {
  return document.createElement(tag)
}

export const createTextNode = (text) => {
  return document.createTextNode(text)
}

export const appendChild = (parentNode, childNode) => {
  return parentNode.appendChild(childNode)
}