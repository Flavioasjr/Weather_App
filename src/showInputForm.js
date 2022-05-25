export default function showInputForm() {
  const btnSearch = document.querySelector('.btn-search');
  const boxForm = document.querySelector('.box-form');
  const darkBackground = document.querySelector('.dark-background');
  const inputCity = document.querySelector('#city');

  btnSearch.addEventListener('click', (e) => {
    e.preventDefault();

    inputCity.value = '';
    boxForm.classList.add('show');
    darkBackground.classList.add('show');
  });
}
