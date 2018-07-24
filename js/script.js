const APP_KEY = process.env.API_KEY;
const URL = process.env.URL;

let url = 'http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APP_ID={APP_KEY)';

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

