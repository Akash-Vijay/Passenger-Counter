let count = 0;
let value = document.getElementById("count");
let prevData = document.getElementById("prev-data");

//Increment function
function increment() {
  count += 1;
  value.textContent = count;
  return count;
}

//Decrement function
function decrement() {
  count -= 1;
  value.textContent = count;
  return count;
}

//Save fucntion
function save() {
  prevData.textContent += count + " | ";
  count = 0;
  value.textContent = 0;
}