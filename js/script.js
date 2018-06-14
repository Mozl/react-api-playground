const APP_KEY = process.env.API_KEY;
const URL = process.env.URL;

let url = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=a5ecde71d07e5c6eccf45b7e5023acaf&units=metric';

fetch(url)
 .then(response => response.json())
 .then(data => {
  console.log(data);
  let placeholder = document.getElementById("text1");
  placeholder = data;
 })
 .catch(error => {
  console.log('There was an error', error);
 });

 