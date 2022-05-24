import 'regenerator-runtime/runtime';
import connectApiWeather from './connectApiWeather';
import showCurrentWeather from './showCurrentWeather';

async function initializeApp(inputCity) {
  const weather = await connectApiWeather(inputCity);
  showCurrentWeather(weather);
}

export default function inputPlace() {
  const inputCity = document.querySelector('#city');
  const btnShowWeather = document.querySelector('.btn-show-weather');

  btnShowWeather.addEventListener('click', (e) => {
    e.preventDefault();

    initializeApp(inputCity.value);
  });
}
