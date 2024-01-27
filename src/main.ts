import './style.css'

const input = document.querySelector('input')
const backButton = document.querySelector('#back')
const keyboard = document.querySelector('section')
const button = document.createElement('button')

if (!input || !button || !keyboard) throw new Error('missing Element')

const charRow = [
  'qwertzuiopü',
  'asdfghjklöä',
  'yxcvbnm'
]

backButton?.addEventListener('click', () => {

  input.value = input.value ? input.value.slice(0, -1) : ''
})

charRow.forEach(row => {
  const chars = row.split('')
  const lineContainer = document.createElement('div')
  const buttons = chars.map(char => {
    const clone = button.cloneNode()
    clone.addEventListener('click', () => {
      input.value = input.value + char
    })
    clone.textContent = char;
    return clone
  })

  buttons.forEach(button => lineContainer.appendChild(button))
  keyboard.appendChild(lineContainer)
})