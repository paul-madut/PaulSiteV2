import Typed from 'typed.js'

var tabLinks = document.getElementsByClassName("tab__links");
var tabContents = document.getElementsByClassName("tab__contents");

function opentab(tabName){
    for(tablink of tabLinks){
        tablink.classList.remove("active__link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active__tab")
    }

    event.currentTarget.classList.add("active__link");
    document.getElementById(tabName).classList.add("active__tab")
    
}


    
    var typed = new Typed(".hero__highlight",{
    strings:["Paul","Paul Madut","Paul The Programmer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})
