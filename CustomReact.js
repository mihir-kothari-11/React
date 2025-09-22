function customeReact(reactElement,mainContainer){
    const createElement = document.createElement(reactElement.type)
    createElement.innerHTML = reactElement.Children
    /* createElement.setAttribute('href',reactElement.props.href)
    createElement.setAttribute('target',reactElement.props.tagert) */
    for (const prop in reactElement.props) {
        createElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(createElement)
}
const reactElement = {
    type:'a',
    props: {
        href : 'https://google.com',
        tagert: '_blank'
    },
    Children:'Click me to visit google'

}

const mainContainer = document.getElementById("root");

customeReact(reactElement,mainContainer)