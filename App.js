
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(countEl);

let count = 0;

function increment() {
  count += 1;
  // countEl.innerText = count;
  countEl.textContent = count;
}

function save() {
  let savedContent = count + " - ";
  saveEl.textContent += savedContent;
  countEl.textContent = 0;
  count = 0;
}
