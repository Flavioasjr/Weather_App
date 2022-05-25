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
  const boxForm = document.querySelector('.box-form');
  const svgWeather = document.querySelector('.svg-weather');
  const itensWeather = document.querySelector('.itens-weather');
  const darkBackground = document.querySelector('.dark-background');

  btnShowWeather.addEventListener('click', (e) => {
    e.preventDefault();

    svgWeather.classList.add('show');
    itensWeather.classList.add('show-svg');
    boxForm.classList.remove('show');
    darkBackground.classList.remove('show');

    initializeApp(inputCity.value);
  });
}
