 

function updateTime() {


let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]"
  );



  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement. querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]"
  );
}
function updateCity(event){
let cityTimeZone = event.target.value;
let cityTIme = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");




}
  

function updateCity(event){
    let cityTimeZone = event.target.value;
    let cityTime = moment().tz(cityTimeZone);
    console.log(cityTime.format("MMMM Do YYYY"));



}
updateTime();

  setInterval(updateTime, 1000);



let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity); 