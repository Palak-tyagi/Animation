let cityouter = document.querySelector('.city-outer');
let cityinner = document.querySelector('.city-inner');
let car = document.querySelector('.car');


setInterval(function(){
  cityouter.classList.toggle('daytonight');
},8000)

document.addEventListener('keypress', keycontrol);
function keycontrol(e){
  if(e.keyCode == 32){
    cityinner.classList.toggle('cityanimation');
      car.classList.toggle('caranimation');
  }
  console.log(e.keyCode);
}
