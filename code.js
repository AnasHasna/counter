const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
let elt = document.getElementById("count");
let count = 0;
update();

increase.addEventListener("click", () => {
  count++;
  update();
});

decrease.addEventListener("click", () => {
  count--;
  update();
});

reset.addEventListener("click", () => {
  count = 0;
  update();
});

function update() {
  elt.innerHTML = count;
  if (count < 0) {
    elt.style.color = "red";
  } else if (count == 0) {
    elt.style.color = "black";
  } else {
    elt.style.color = "green";
  }
}
