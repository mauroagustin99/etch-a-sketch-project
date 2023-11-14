const container = document.querySelector('.board');

for (let i=0; i<17; i++){
const square = document.createElement('div');
square.classList.add('square',`-${i}`);
container.append(square);
}