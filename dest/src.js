function addInitialAttributes() {
  let signUp = document.getElementById('signUp');
  signUp.classList.add('bg-gray-500', 'text-gray-300');
  let homeBottomElement = document.querySelector('.home-bottom');
  homeBottomElement.classList.add('default-style_b');
  let homeTopElement = document.querySelector('.home-top');
  homeTopElement.classList.add('default-style_t');
};
window.onload = addInitialAttributes();

document.addEventListener('DOMContentLoaded', function () {
  var boxes = document.querySelectorAll('.click-links');
  boxes.forEach(function (box) {
    box.addEventListener('click', function (event) {
      let width = window.innerWidth;
      if (width >= 600) {
        boxes.forEach(function (otherBox) {
          otherBox.classList.remove('default-style_b');
        });
        event.target.classList.add('default-style_b');
      } else {
        boxes.forEach(function (otherBox) {
          otherBox.classList.remove('default-style_t');
        });
        event.target.classList.add('default-style_t');
      }
    });

  });

  var forms = document.querySelectorAll('.enForm');
  forms.forEach(function (form) {
    form.addEventListener('click', function (event) {
      forms.forEach(function (otherForm) {
        otherForm.classList.remove('bg-gray-500', 'text-gray-300');
      });
      event.target.classList.add('bg-gray-500', 'text-gray-300');
    });
  });

});

var darkClick = document.querySelectorAll(".dark-mode");
var labels = document.querySelectorAll(".dark-label");
darkClick.forEach(function (params) {
  params.addEventListener('click', function (params) {
    document.body.classList.toggle('dark');
    labels.forEach((label) => label.classList.toggle("bg-yellow-100"))
  })
})

let menu = document.querySelector(".menu")
var bars = document.getElementById("bars");
var bar_3 = document.getElementById("bar-3");
var xMark = document.getElementById("x-mark");
const classToggle = (el, ...args) => args.map(e => el.classList.toggle(e))
bars.addEventListener('click', function () {

  if (bars.classList.contains('bar-on')) {

    bars.classList.remove('bar-on')
    bar_3.classList.add("hidden")
    classToggle(menu, "-left-72", "left-0");
    classToggle(xMark, "hidden", "block");

  } else {
    bars.classList.add('bar-on')
    classToggle(menu, "-left-72", "left-0");
    classToggle(xMark, "hidden", "block");
    classToggle(bar_3, "hidden", "block");
  }
});
