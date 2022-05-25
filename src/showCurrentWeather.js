function showSvgWeather(weather, cloudiness) {
  const weatherIcon = document.querySelectorAll('#div-svg');
  const partlyCloudy = document.querySelector('.partly-cloudy');

  if (cloudiness <= 50 && weather !== 'Clear') {
    for (let i = 0; i < weatherIcon.length; i += 1) {
      weatherIcon[i].classList.remove('show-svg');
    }
    partlyCloudy.classList.add('show-svg');
    return;
  }

  partlyCloudy.classList.remove('show-svg');

  for (let i = 0; i < weatherIcon.length; i += 1) {
    weatherIcon[i].classList.remove('show-svg');

    if (weather === weatherIcon[i].classList.value) {
      weatherIcon[i].classList.add('show-svg');
    }
  }
}

export default function showCurrentWeather(weather) {
  const temperature = document.querySelector('.temperature');
  const rain = document.querySelector('.rain');
  const humidity = document.querySelector('.humidity');
  const weatherMain = document.querySelector('.weather-main');
  const cloud = document.querySelector('.cloud');
  const wind = document.querySelector('.wind');
  const location = document.querySelector('.location');
  const numberTemperature = Number(weather.main.temp);

  showSvgWeather(weather.weather[0].main, weather.clouds.all);

  if (weather.weather[0].main === 'Clear') {
    document.documentElement.style.setProperty('--color-weather', '#f2b433');
  } else if (weather.weather[0].main === 'Rain') {
    document.documentElement.style.setProperty('--color-weather', '#8a91b1');
  } else {
    document.documentElement.style.setProperty('--color-weather', '#5d79f0');
  }

  if (!weather.rain) {
    rain.textContent = 'Rainless';
  } else {
    rain.textContent = `${weather.rain['1h']}mm`;
  }

  location.textContent = `${weather.name}, ${weather.sys.country}`;
  temperature.textContent = `${numberTemperature.toFixed()}°C`;
  humidity.textContent = `${weather.main.humidity}%`;
  weatherMain.textContent = weather.weather[0].description;
  cloud.textContent = `${weather.clouds.all}%`;
  wind.textContent = `${weather.wind.speed}m/s`;
}
