const counter = document.querySelector('#count');

const increase = document.querySelector('#increase-btn');

const reset = document.querySelector('#reset-btn');

let count = 0;

increase.addEventListener('click', () => {
  count++;
  counter.textContent = `${count}`;
});

reset.addEventListener('click', () => {
  count = 0;
  counter.textContent = `${count}`;
});
