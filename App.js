
const heading = React.createElement('h1',{id:"heading"},'This is from React separate script')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

console.log('heading', heading)
console.log('root', root)