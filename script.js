const btn_size = document.querySelector('.size');
const container = document.querySelector('.board');
const btn_reset = document.querySelector('.reset');
const btn_erase = document.querySelector('.eraser');
let colorPicker = document.querySelector('#color-picker');
let currentSize = 16;

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
  colorPicker.addEventListener('change', function (event) {
    color = event.target.value;
    isDrawing.value = false;
    erase = false;
  });

  btn_erase.onclick = function () {
    erase = true;
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
      } else {
        square.style.backgroundColor = color;
      }
    }
  });
}

function playground(size) {
  container.innerHTML = '';
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
  var size = prompt('What size would you like?');
  if (!isNaN(size) && parseInt(size) > 0) {
    gridSize = parseInt(size);
    playground(gridSize);
  } else {
    alert('Please enter a valid number.');
  }
};

btn_reset.onclick = function () {
  playground(currentSize);
};

playground(16); //Initialize
