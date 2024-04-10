const btn_size = document.querySelector('.btn-size');
const container = document.querySelector('.board');

function createRow(rowIndex, size) {
  const row = document.createElement('div');
  row.classList.add('row', `-${rowIndex}`);
  return row;
}

function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  return square;
}

function addDrawingListeners(square, isDrawing) {
  square.addEventListener('mousedown', () => {
    isDrawing.value = true;
  });
  square.addEventListener('mouseup', () => {
    isDrawing.value = false;
  });
  square.addEventListener('mousemove', () => {
    if (isDrawing.value) {
      square.style.backgroundColor = 'black';
    }
  });
}

function playground(size) {
  container.innerHTML = '';
  const isDrawing = { value: false };

  for (let i = 0; i < size; i++) {
    const row = createRow(i, size);
    container.appendChild(row);

    for (let j = 0; j < size; j++) {
      const square = createSquare();
      row.appendChild(square);
      addDrawingListeners(square, isDrawing);
    }
  }
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

playground(16); //Initialize
