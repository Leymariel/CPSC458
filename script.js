// script.js
window.onscroll = function() {shrinkHeader()};

function shrinkHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("header").style.padding = "10px 0";
    } else {
        document.querySelector("header").style.padding = "20px 0";
    }
}
