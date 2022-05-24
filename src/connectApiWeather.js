import 'regenerator-runtime/runtime';

export default async function connectApiWeather(city = '') {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2559f4d7c5078a23e00ce8edad012a46`;
    const response = await fetch(url, { mode: 'cors' });
    const weather = await response.json();

    return weather;
  } catch (error) {
    return error;
  }
}
