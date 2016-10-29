console.log('Loaded!');
//changing the value of html by using inner html tag
//grab the element
var element = document.getElementById('main-text');
//apply the change in html by using inner element jvascript
element.innerHTML = 'hy this time i have made some changes by the power of jvascript';
//moving the image to left gradually
//select the img to move
var img = document.getElementById('madi');
//create a variable which move element right and initilize it
var marginright =0;
//create a function which move the value of the function right gradually
function moveRight () {
  marginright = marginright = 1;
  img.stylr.marginright = marginright + 'px';
}
//give the cammand that on click initilise the function 
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};