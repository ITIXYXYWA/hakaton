import imgStar from '../assets/img/error-star.svg';

export const validationForm = (files) => {
  let inputName = document.getElementById('nameFile');
  let errorNameTxt = document.querySelector('.error-message--name');
  let inputInn = document.getElementById('inn');
  let errorInnTxt = document.querySelector('.error-message--inn');
  let uploadFile = document.querySelector('.home__upload');
  let errorFileTxt = document.querySelector('.error-message--file');

  if (inputName.value.length === 0) {
    inputName.classList.add('home__input__error');
    errorNameTxt.classList.remove('hide');
  } else {
    inputName.classList.remove('home__input__error');
    errorNameTxt.classList.add('hide');
  }

  if (inputInn.value.length === 0 || inputInn.value.length !== 10 && inputInn.value.length !== 12) {
    inputInn.classList.add('home__input__error');
    errorInnTxt.classList.remove('hide');
  } else {
    inputInn.classList.remove('home__input__error');
    errorInnTxt.classList.add('hide');
  }

  if (files !== undefined) {
    uploadFile.classList.remove('home__upload__error');
    errorFileTxt.classList.add('hide');
  } else {
    uploadFile.classList.add('home__upload__error');
    errorFileTxt.classList.remove('hide');
  }
}