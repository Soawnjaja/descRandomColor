const board =document.querySelector('#board')
const colors = ['#4aa12e', '#bbc671', '#e66b58', '#9db1ed', '#c4274f', 'oragne', '#64acce', '#9e2f6f', '#b4d983']
const SQUARES_NUMBER = 1190

for(let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () => setColor(square))
   square.addEventListener('mouseleave', () => removeColor(square))
   
   board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}