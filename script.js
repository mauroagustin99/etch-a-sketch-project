const container = document.querySelector('.board');
const gridSize = 2;

for (let i=0; i<(gridSize); i++){
  const row = document.createElement('div');
  row.classList.add('row',`-${i}`);
  container.appendChild(row);

  for(let j=0; j<gridSize;j++){
    const square = document.createElement('div');
    square.classList.add('square',`-${i}-${j}`);
    row.appendChild(square);
  }
}

document.documentElement.style.setProperty('--')