
import React from 'react'
import ReactDOM from 'react-dom'

const heading = React.createElement('h1',{id:"heading"},'This is from React separate script for me')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

console.log('heading', heading)
console.log('root', root)