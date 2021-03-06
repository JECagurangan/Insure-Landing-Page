const hamburger = document.querySelector(".navbar__hamburger");
let hamburgerFlag = true;

const hamburgerView = document.querySelector(".hamburger-view");



hamburger.addEventListener('click', function(evt){
    console.log("working");

    if(hamburgerFlag === true){
        hamburger.style.backgroundImage = "url('./images/icon-close.svg')";
        hamburgerFlag = false;
        hamburgerView.style.display = "block"
        hamburgerView.style.opacity = "1";
        hamburgerView.style.visibility = "visible";
    }else{
        hamburger.style.backgroundImage = "url('./images/icon-hamburger.svg')";
        hamburgerFlag = true;
        hamburgerView.style.display = "none";
        hamburgerView.style.opacity = "0";
        hamburgerView.style.visibility = "hidden";
    }

})

//document.body.style.backgroundImage = "url('img_tree.png')";