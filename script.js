document.addEventListener('DOMContentLoaded', function () {
  playground(16); //Initialize
});

const container = document.querySelector('.board');
const btn_size = document.querySelector('.size');
const btn_grid = document.querySelector('.grid-btn');
const btn_reset = document.querySelector('.reset');
const btn_erase = document.querySelector('.eraser');

let colorPicker = document.querySelector('#color-picker');
let currentSize = 16;
const show_size = document.querySelector('.current-size');
function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  return square;
}

function addDrawingListeners(square, isDrawing) {
  color = 'black'; //Default color
  erase = false;
  random = false;
  colorPicker.addEventListener('change', function (event) {
    color = event.target.value;
    isDrawing.value = false;
    erase = false;
    random = false;
  });

  btn_erase.onclick = function () {
    erase = true;
    random = false;
  };

  square.addEventListener('mousedown', () => {
    event.preventDefault(); //Prevent the wrong browser behavior
    isDrawing.value = true;
  });
  square.addEventListener('mouseup', () => {
    isDrawing.value = false;
  });
  square.addEventListener('mousemove', () => {
    if (isDrawing.value) {
      if (erase) {
        square.style.backgroundColor = 'gainsboro';
      } else if (random) {
        square.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
      } else {
        square.style.backgroundColor = color;
      }
    }
  });
}

function playground(size) {
  container.innerHTML = '';
  console.log('Grid Size: ', size);
  show_size.innerHTML = 'Grid Size: ' + size;
  const isDrawing = { value: false };

  for (let i = 0; i < size; i++) {
    const row = createRow();
    container.appendChild(row);

    for (let j = 0; j < size; j++) {
      const square = createSquare();
      row.appendChild(square);
      addDrawingListeners(square, isDrawing);
    }
  }
  currentSize = size;
}

btn_size.onclick = function () {
  var size = prompt('What size would you like? 1-100');
  if (!isNaN(size) && parseInt(size) > 0 && parseInt(size) < 101) {
    gridSize = parseInt(size);
    playground(gridSize);
  } else {
    alert('Please enter a valid number.');
  }
};

btn_reset.onclick = function () {
  playground(currentSize);
};

let gridEnabled = false;
btn_grid.onclick = function () {
  const squares = document.querySelectorAll('.square');
  if (!gridEnabled) {
    squares.forEach((square) => {
      square.classList.add('grid');
    });
    gridEnabled = true;
  } else {
    squares.forEach((square) => {
      square.classList.remove('grid');
    });
    gridEnabled = false;
  }
};

function randomColor() {
  erase = false;
  return (random = true);
}

console.log('random: ' + random);
