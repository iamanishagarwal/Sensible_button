var box = document.getElementById('box');
var innerBox = document.getElementById('innerBox');
var a = 1;
window.addEventListener('load', doFirst, false);
function doFirst() {
  innerBox.addEventListener('click', button, false);
}

function button() {
  if (a == 1) {
    innerBox.style.left = '191px';
    innerBox.style.backgroundColor = '#FDFEFE';
    innerBox.style.borderColor = '#FDFEFE';
    box.style.borderColor = '#512E5F';
    box.style.backgroundColor = '#512E5F';
    innerBox.style.WebkitTransition = 'left 1s';
    box.style.WebkitTransition = 'background-color 0.2s, border-color 0.2s';
    a = 0;
  }
  else {
    innerBox.style.left = '0px';
    innerBox.style.backgroundColor = '#17202A';
    innerBox.style.borderColor = '#17202A';
    box.style.borderColor = 'black';
    box.style.backgroundColor = '#FDFEFE';
    innerBox.style.WebkitTransition = 'left 1s';
    box.style.WebkitTransition = 'background-color 0.2s, border-color 0.2s';
    a = 1;
  }
}
