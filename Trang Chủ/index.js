let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;
next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
function reloadSlider() {
  let checkleft = items[active].offsetLeft;
  list.computedStyleMap.left = -checkleft + "px";
  let las;
}
// B   A   N   N   E   R   4   ---   S   L   I   D   E
function slide_in() {
  var reveals = document.getElementsByClassName('slideIn');
  console.log(reveals);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - 200) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", slide_in);