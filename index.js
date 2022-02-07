let sidemenubar = document.getElementById('sidemenubar');
let page1 = document.getElementById('page');
let index = document.getElementById('index');
let notsupport = document.getElementById('notsupport');
let third = document.getElementById('third');
let gthird = document.getElementById('gthird');
let second = document.getElementById('second');
let gsecond = document.getElementById('gsecond');
let snav = document.getElementById('snav');

function sback() {
    index.style.display = "block";
    snav.style.display = "none";
}

function searchbar() {
    index.style.display = "none";
    snav.style.display = "flex";
}

function max() {
    second.style.display = "none";
    third.style.display = "none";
    gthird.style.display = "flex";
    gsecond.style.display = "flex";
}
function min() {
    second.style.display = "flex";
    third.style.display = "block";
    gthird.style.display = "none";
    gsecond.style.display = "none";
}

function menu() {
    sidemenubar.style.width = "280px";
    page1.style.opacity = "0.5";
    page1.style.background = ""
}
function page() {
    sidemenubar.style.width = "0px";
    page1.style.opacity = "1000";
}