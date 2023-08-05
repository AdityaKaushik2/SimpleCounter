// let count = 0;

// console.log(count);

// let myage = 22;

// console.log(myage);

// let myage = 22;
// let dogRatio = 7;

// let myDogAge = myage * dogRatio;

// console.log(myDogAge);

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
