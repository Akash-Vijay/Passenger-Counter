let count = 0;
let value = document.getElementById("count");

function increment() {
  count += 1;
  value.innerText = count;
  return count;
}

function decrement() {
  count -= 1;
  value.innerText = count
  return count;
}