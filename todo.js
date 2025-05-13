const input = document.getElementById('item')
const button = document.getElementById('addButton')
const list = document.getElementById('list')

button.addEventListener('click', function () {
  const text = input.value // "Beurre"
  if (text) {
    const newItem = document.createElement('li') // <li></li>
    newItem.textContent = text // <li>Beurre</li>
    list.appendChild(newItem) // <ul id='list'><li>Beurre</li></ul>
    input.value = '' // Réinitialise le champ de texte
  }
})
