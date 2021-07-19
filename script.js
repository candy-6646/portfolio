
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
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
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





//Adding eventListener on skills buttons
let allBtnOfSkill = document.querySelectorAll(".card>.card-body>a");
for(let i = 0; i < allBtnOfSkill.length; i++) {

  allBtnOfSkill[i].addEventListener("click", function(e) {

    let modalTitle = document.querySelector(".modal-title");
    let modalBody = document.querySelector(".modal-body");

    if(e.currentTarget.classList[2] === "skill-1") {

      modalTitle.innerText = "Front-end development skills";
      modalBody.innerHTML = `<div class="progress-container">
            <div class="progress-title">HTML</div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">CSS</div>
            <div class="progress">
              <div class="progress-bar bg-info" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">JS</div>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Bootstrap</div>
            <div class="progress">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 95%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">React JS</div>
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 45%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">jQuery</div>
            <div class="progress">
              <div class="progress-bar bg-dark" role="progressbar" style="width: 55%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>`;


    }else if(e.currentTarget.classList[2] === "skill-2") {
      modalTitle.innerText = "Back-end Development skills";
      modalBody.innerHTML = `<div class="progress-container">
            <div class="progress-title">Node Js</div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Express Js</div>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Mongo DB</div>
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Sql</div>
            <div class="progress">
              <div class="progress-bar bg-dark" role="progressbar" style="width: 65%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">EJS</div>
            <div class="progress">
              <div class="progress-bar bg-secondary" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Mongoose</div>
            <div class="progress">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>`;

    }else if(e.currentTarget.classList[2] === "skill-3") {
      modalTitle.innerText = "Coursework";
      modalBody.innerHTML = `<div class="progress-container">
            <div class="progress-title">C</div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">C++</div>
            <div class="progress">
              <div class="progress-bar bg-secondary" role="progressbar" style="width: 66%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Java</div>
            <div class="progress">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Python</div>
            <div class="progress">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">Git and GitHub</div>
            <div class="progress">
              <div class="progress-bar bg-dark" role="progressbar" style="width: 90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
          </div>
          <div class="progress-container">
            <div class="progress-title">DBMS</div>
            <div class="progress">
              <div class="progress-bar bg-primary" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

            <div class="progress-container">
              <div class="progress-title">OOPS</div>
              <div class="progress">
                <div class="progress-bar bg-secondary" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress-container">
              <div class="progress-title">Data Structures and Algorithms</div>
              <div class="progress">
                <div class="progress-bar bg-danger" role="progressbar" style="width: 72%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>`;

    }

  });

}