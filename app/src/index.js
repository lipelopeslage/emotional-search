import './style.css'
import Icon from './assets/images/picture.jpg'
import './../../webcomponents/dist/main.js'

function component() {
  const element = document.createElement('div')
  const msgs = { a: 1, b: 2 }

  element.innerHTML = 'Hello World'
  element.classList.add('hello')

  const myIcon = new Image()
  myIcon.src = Icon

  const input = document.createElement('boto-text-input')
  

  const button = document.createElement('boto-button')
  button.innerHTML = 'Alo mundo!'

  const pizza = document.createElement('boto-pizza-graph')

  element.appendChild(myIcon)
  element.appendChild(input)
  element.appendChild(button)
  element.appendChild(pizza)

  return element
}

document.body.appendChild(component())
