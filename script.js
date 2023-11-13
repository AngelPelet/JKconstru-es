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



//--------------------------------------------------------------------

let iniciar = document.getElementById("enviar")

iniciar.addEventListener("click", function(event) {
  alert('Mensagem enviada com sucesso!')
}, true );