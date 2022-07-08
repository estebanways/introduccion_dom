function changeColor() {
  console.log('press Button');
}

window.onload = function () {
  const btn1 = document.getElementById('btn-one');
  const btn2 = document.getElementById('btn-two');
  const btn3 = document.getElementById('btn-three');
  const btn4 = document.getElementById('btn-four');
  const btn5 = document.getElementById('btn-five');

  function myFunction() {
    console.log('Hi from myFunction!');
    //window.document.getElementById('btn-one').style.background = '#eb7e35';
  }

  btn1.addEventListener('click', myFunction, false);
  window.document.getElementById('btn-one').onclick = function (event) {
    window.document.getElementById('btn-one').style.background = '#eb7e35';
  }
  btn2.addEventListener('click', myFunction, false);
  window.document.getElementById('btn-two').onclick = function (event) {
    window.document.getElementById('btn-two').style.background = '#eb7e35';
  }
  btn3.addEventListener('click', myFunction, false);
  window.document.getElementById('btn-three').onclick = function (event) {
    window.document.getElementById('btn-three').style.background = '#eb7e35';
  }
  btn4.addEventListener('click', myFunction, false);
  window.document.getElementById('btn-four').onclick = function (event) {
    window.document.getElementById('btn-four').style.background = '#eb7e35';
  }
  btn5.addEventListener('click', myFunction, false);
  window.document.getElementById('btn-five').onclick = function (event) {
    window.document.getElementById('btn-five').style.background = '#eb7e35';
  }
}