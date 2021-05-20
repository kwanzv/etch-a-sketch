const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('buttons');
const btnRainbow = document.querySelector('#rnb');
const btnBlack = document.querySelector('#black');
let color = 'black';

function divgrid() {
  var col = prompt("What size grid do you want?")

  container.style.gridTemplateColumns = `repeat(${col},1fr)`;
  container.style.gridTemplateRows = `repeat(${col},1fr)`;

  for (let i = 0; i < (col * col); i++) {
    const div = document.createElement('div')
    div.style.border = '3px solid black';
    container.appendChild(div).classList.add('box');
    div.addEventListener('mouseover', () => {
      colorDiv(div);
    })
  }
}

function colorDiv(div) {
  if (color === 'black') {
    div.style.backgroundColor = 'black';
  }
  if (color === 'blue') {
    div.style.backgroundColor = '#233067';
  }
}

btnRainbow.addEventListener('click', () => {
  color = 'blue';
})

btnBlack.addEventListener('click', () => {
  color = 'black';
})

divgrid();


