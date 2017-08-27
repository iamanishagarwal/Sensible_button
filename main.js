var box = document.getElementById('box');
var innerBox = document.getElementById('innerBox');
var a = 1;
window.addEventListener('load', doFirst, false);
function doFirst() {
  innerBox.addEventListener('click', button, false);
}

function button() {
  if (a == 1) {
    innerBox.style.cssFloat = 'right';
    innerBox.style.backgroundColor = '#FDFEFE';
    innerBox.style.borderColor = '#FDFEFE';
    box.style.borderColor = '#21618C';
    box.style.backgroundColor = '#512E5F';
    box.style.WebkitTransition = 'background-color 2s, border-color 2s ';
    innerBox.style.WebkitTransition = 'background-color 2s, border-color 2s ';
    a = 0;
  }
  else {
    innerBox.style.cssFloat = 'left';
    innerBox.style.backgroundColor = '#17202A';
    innerBox.style.borderColor = '#17202A';
    box.style.borderColor = 'black';
    box.style.backgroundColor = '#FDFEFE';
    a = 1;
  }
}
