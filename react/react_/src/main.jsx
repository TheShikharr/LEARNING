import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/*
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click the link to visit the site'
}
*/

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const series = "HELL'S PARADISE"
const thirdReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Visit Google!',
    series
)

createRoot(document.getElementById('root')).render(
    // <App />
    // anotherElement
    thirdReactElement
)
