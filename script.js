var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

/*-------------------------------------------------------------------------*/



const accordion = document.getElementsByClassName('label');
const accordionoff = document.getElementsByClassName('contentBx');

for (i = 0; i<accordion.length; i++){
  accordion[i].addEventListener('click', function(){
  accordionoff.item(0).classList.toggle('ativo')
});
}

const accordion1 = document.getElementsByClassName('label1');
const accordionoff1 = document.getElementsByClassName('contentBx1');

for (i = 0; i<accordion1.length; i++){
  accordion1[i].addEventListener('click', function(){
  accordionoff1.item(0).classList.toggle('ativo1')
});
}

const accordion2 = document.getElementsByClassName('label2');
const accordionoff2 = document.getElementsByClassName('contentBx2');

for (i = 0; i<accordion2.length; i++){
  accordion2[i].addEventListener('click', function(){
  accordionoff2.item(0).classList.toggle('ativo2')
});
}


//-----------------------------------------------------------------------------


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

//-----------------------------------------------------------------------


let si = 1;
showSlides1(si);

function plusSlides1(n) {
  showSlides1(si += n);
}

function currentSlide1(n) {
  showSlides1(si = n);
}

function showSlides1(n) {
  let i;
  let slidess = document.getElementsByClassName("fotos");
  let dotss = document.getElementsByClassName("dot1");
  if (n > slidess.length) {si = 1}    
  if (n < 1) {si = slidess.length}
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";  
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" active", "");
  }
  slidess[si-1].style.display = "block";  
  dotss[si-1].className += " active";
}


let si1 = 1;
showSlides2(si1);

function plusSlides2(n) {
  showSlides2(si1 += n);
}

function currentSlide2(n) {
  showSlides2(si1 = n);
}

function showSlides2(n) {
  let i;
  let slidess1 = document.getElementsByClassName("fotos1");
  let dotss1 = document.getElementsByClassName("dot2");
  if (n > slidess1.length) {si1 = 1}    
  if (n < 1) {si1 = slidess1.length}
  for (i = 0; i < slidess1.length; i++) {
    slidess1[i].style.display = "none";  
  }
  for (i = 0; i < dotss1.length; i++) {
    dotss1[i].className = dotss1[i].className.replace(" active1", "");
  }
  slidess1[si1-1].style.display = "block";  
  dotss1[si1-1].className += " active1";
}


let si2 = 1;
showSlides3(si2);

function plusSlides3(n) {
  showSlides3(si2 += n);
}

function currentSlide3(n) {
  showSlides3(si2 = n);
}

function showSlides3(n) {
  let i;
  let slidess2 = document.getElementsByClassName("fotos2");
  let dotss2 = document.getElementsByClassName("dot3");
  if (n > slidess2.length) {si2 = 1}    
  if (n < 1) {si2 = slidess2.length}
  for (i = 0; i < slidess2.length; i++) {
    slidess2[i].style.display = "none";  
  }
  for (i = 0; i < dotss2.length; i++) {
    dotss2[i].className = dotss2[i].className.replace(" active2", "");
  }
  slidess2[si2-1].style.display = "block";  
  dotss2[si2-1].className += " active2";
}



//--------------------------------------------------------------------