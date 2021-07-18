var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings: ['Developer', 'Designer', 'An Artist'],
    autoStart: true,
    loop:true
});


let body = document.querySelector("body");

let skillsIcons = document.querySelectorAll("#skills .skill-icon");
for(let i = 0; i < skillsIcons.length; i++) {
  skillsIcons[i].style.backgroundImage = `url("images/s${i + 1}.png")`;
  skillsIcons[i].style.backgroundSize = "contain";
  skillsIcons[i].style.backgroundRepeat = "no-repeat";
}


let w = window.innerWidth;

if(window.orientation > -1 || w < 900) {

    document.querySelector("#top .left-nav-bar").remove();

    let topSection = document.querySelector("#top");
    topSection.style.width = "100vw";
    topSection.style.margin = "0px"; 

    let aboutSec = document.getElementById("about");
    aboutSec.style.width = "100vw";
    aboutSec.style.margin = "0px"; 

    let skillsSec = document.getElementById("skills");
    skillsSec.style.width = "100vw";
    skillsSec.style.margin = "0px"; 
    skillsSec.style.marginTop = "12rem"; 


    let div = document.createElement("div");
    div.id = "nav-bar";
    div.innerHTML = `<button class="btn btn-outline-primary" id="navBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
            <button type="button" class="btn btn-outline-primary text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i class="fa fa-times" aria-hidden="true"></i></button>
          </div>
          <div class="offcanvas-body">
            <div class="nav-img">
            
            </div>
            <div class="social-icons">
              <div class="social-icon"><i class="fa fa-twitter" aria-hidden="true"></i></div>
              <div class="social-icon"><i class="fa fa-skype" aria-hidden="true"></i></div>
              <div class="social-icon"><i class="fa fa-instagram" aria-hidden="true"></i></div>
              <div class="social-icon"><i class="fa fa-facebook" aria-hidden="true"></i></div>
            </div>
            
            <div class="navigationBtns">
              <div class="nav-optn"><i class="fa fa-home" aria-hidden="true"></i> Home</div>
              <div class="nav-optn"><i class="fa fa-user-o" aria-hidden="true"></i> About</div>
              <div class="nav-optn"><i class="fa fa-trophy" aria-hidden="true"></i> Skills</div>
              <div class="nav-optn"><i class="fa fa-file-text-o" aria-hidden="true"></i> Projects</div>
              <div class="nav-optn"><i class="fa fa-handshake-o" aria-hidden="true"></i> Contact me</div>
            </div>
          </div>
        </div>`;

        body.append(div);

}