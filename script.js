
const btn_size = document.querySelector(".btn-size");
const container = document.querySelector('.board');

function createBoard(size){
  container.innerHTML = '';
  for (let i=0; i< size ; i++){
  const row = document.createElement('div');
  row.classList.add('row',`-${i}`);
  container.appendChild(row);

  for(let j=0; j< size ;j++){
    const square = document.createElement('div');
    square.classList.add('square',`-${i}-${j}`);
    row.appendChild(square);
  }
}
}

btn_size.onclick = function(){
  var size = prompt("What size would you like?");
  if (!isNaN(size) && parseInt(size) > 0) {
    gridSize = parseInt(size);
    createBoard(gridSize);
  } else {
    alert("Please enter a valid number.");
  }
};





