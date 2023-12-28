function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAtrribute('href',reactElement.props.href)
    domElement.setAtrribute('traget',reactElement.props.target)
    container.appendChild(domElement)
}



const reactElement={
    type:'a',
    props:{
        href:'https//google.com',
        target:'_blank'

    },
    children:'click me to visit google'
} 
const mainContainer=document.querySelector('#root')
customRender(reactElement,mainContainer)