export default function showCurrentWeather(weather) {
  const temp = document.querySelector('.temp');
  const rain = document.querySelector('.rain');
  const humidity = document.querySelector('.humidity');
  const weatherMain = document.querySelector('.weather-main');
  const cloud = document.querySelector('.cloud');
  console.log(weather);

  if (!weather.rain) {
    rain.textContent = '';
  } else {
    rain.textContent = weather.rain['1h'];
  }

  temp.textContent = weather.main.temp;
  humidity.textContent = weather.main.humidity;
  weatherMain.textContent = weather.weather[0].description;
  cloud.textContent = weather.clouds.all;
}
