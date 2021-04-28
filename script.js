// function to toggle the bar 

function animatednavigationtoolbar() {
 var x = document.getElementById('menus');
 if (x.style.display === "block") {
  x.style.display = "none";
 } 
 else {
  x.style.display = "block";
 }
}

//function to toggle  the plus menu into minus 

function myFunction(x) {
 x.classList.toggle("fa-minus-circle");
}