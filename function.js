let count = 0;
let value = document.getElementById("count");



//Increment function
function increment() {
  count += 1;
  value.innerText = count;
  return count;
}


//Decrement function
function decrement() {
  count -= 1;
  value.innerText = count
  return count;
}
