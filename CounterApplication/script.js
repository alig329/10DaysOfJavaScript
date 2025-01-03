let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", e => {
    let elementId = e.currentTarget.id;
    if (elementId === "decrease") {
      count--;
    } else if (elementId === "reset") {
        count = 0;
    } else {
      count++;
    }
    value.textContent = count;
    });
});