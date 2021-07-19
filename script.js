
let body = document.querySelector("body");



let w = window.innerWidth;

if(window.orientation > -1 || w < 900) {

}



var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings: ['Developer', 'Designer', 'An Artist'],
    autoStart: true,
    loop:true
});


//Get the button:
mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}