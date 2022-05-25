import 'regenerator-runtime/runtime';
import connectApiWeather from './connectApiWeather';
import showCurrentWeather from './showCurrentWeather';

export default async function homePage() {
  const weatherHome = await connectApiWeather('New York');
  showCurrentWeather(weatherHome);
}
