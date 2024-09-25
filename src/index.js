 
 //losAngeles 
 let losAngelesElement =document.querySelector("#los-angeles");
 let losAngelesDateElement = losAngelesElement.querySelector(".date");
 let losAngelesTimeElement = losAngelesTimeElement.querySelector(".time");
 
 losAngelesDateElement.innerHTML = moment().format('dddd');
 losAngelesTimeElement.innerHTML = "1:45:15<small>am</small>";