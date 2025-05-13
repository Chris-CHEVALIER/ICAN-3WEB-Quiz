/* let cosmo = {
  name: 'Cosmo',
  age: 2,
  gender: 'mâle',
  color: 'sable',
  isCastrated: false
}
console.log(cosmo.name)
console.log(cosmo.color)
console.log(document.body) */

let bulbazorBtn = document.getElementById('bulbazor-btn')
let charmanderBtn = document.getElementById('charmander-btn')
let squirtleBtn = document.getElementById('squirtle-btn')
let buttons = document.querySelectorAll('main section button')
console.log(bulbazorBtn)
console.log(buttons)

let result = document.createElement('p') // <p></p>
let bulbazorImg = document.createElement('img') // <img>

bulbazorBtn.addEventListener('click', () => {
  result.textContent = 'Bonne réponse !' // <p>Bonne réponse</p>
  result.style.color = 'green' // <p style='color: green'>Bonne réponse</p>
  bulbazorImg.src =
    'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png'
  bulbazorImg.alt = 'Bulbizarre'
})
charmanderBtn.addEventListener('click', () => {
  result.textContent = 'Mauvaise réponse...'
  result.style.color = 'red'
  questionSection.removeChild(bulbazorImg)
})
squirtleBtn.addEventListener('click', () => {
  result.textContent = 'Mauvaise réponse...'
  result.style.color = 'red'
  questionSection.removeChild(bulbazorImg)
})

let questionSection = document.getElementById('question-section')
questionSection.appendChild(result)
questionSection.appendChild(bulbazorImg)

let count = 0
let countLabel = document.querySelector('#count-label')
let countBtn = document.querySelector('#btn')
let resetBtn = document.querySelector('#reset-btn')

countBtn.addEventListener('click', () => {
  count++
  countLabel.textContent = count
})

resetBtn.addEventListener('click', () => {
  count = 0
  countLabel.textContent = count
})