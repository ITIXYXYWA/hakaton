import imgStar from '../assets/img/error-star.svg';

export const validationForm = (files) => {
  const formChecks = {};
  let inputName = document.getElementById('nameFile');
  let errorNameTxt = document.querySelector('.error-message--name');
  let inputInn = document.getElementById('inn');
  let errorInnTxt = document.querySelector('.error-message--inn');
  let uploadFile = document.querySelector('.home__upload');
  let errorFileTxt = document.querySelector('.error-message--file');

  if (inputName.value.length === 0) {
    inputName.classList.add('home__input__error');
    errorNameTxt.classList.remove('hide');
    formChecks.filename = { check: false };
  } else {
    inputName.classList.remove('home__input__error');
    errorNameTxt.classList.add('hide');
    formChecks.filename = {
      text: inputName.value,
      check: true
    };
  }

  if (inputInn.value.length === 0 || inputInn.value.length !== 10 && inputInn.value.length !== 12) {
    inputInn.classList.add('home__input__error');
    errorInnTxt.classList.remove('hide');
    formChecks.inn = { check: false };

  } else {
    inputInn.classList.remove('home__input__error');
    errorInnTxt.classList.add('hide');
    formChecks.inn = {
      text: inputInn.value,
      check: true
    };
  }

  if (files !== undefined) {
    uploadFile.classList.remove('home__upload__error');
    errorFileTxt.classList.add('hide');
    if (files[0].name.indexOf('.zip') === -1) {
      uploadFile.classList.add('home__upload__error');
      errorFileTxt.classList.remove('hide');
      formChecks.file = { check: true };
    }
  } else {
    uploadFile.classList.add('home__upload__error');
    errorFileTxt.classList.remove('hide');
    formChecks.file = { check: false };
  }
  return formChecks;
}