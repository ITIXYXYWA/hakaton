import { checker } from "./validation/checker.js";
export const textValidator = (text = localStorage.getItem("text")) => {
  if (text.toLowerCase().indexOf("дата составления  протокола") !== -1) {
    checker(text.toLowerCase(), [
      "протокол совета директоров",
      "дата составления протокола",
      "избрание/назначение генерального директора",
      "итоги голосования",
      "принятое решение"
    ]);
    return ;
  }

  if (text.toLowerCase().indexOf("устав") !== -1) {
    checker(text.toLowerCase(), [
      "устав",
      "уставный капитал",
      "органы управления",
      "резервный фонд",
      "бюллетени",
    ]);
    return ;
  }

  if (text.toLowerCase().indexOf("положение о совете директоров") !== -1) {
    checker(text.toLowerCase(), [
      "положение о совете директоров",
      "председатель совета директоров",
      "письменное мнение",
      "опросный лист",
      "уведомление о проведении совета директоров",
    ]);
    return ;
  }

  if (text.toLowerCase().indexOf("аудиторское заключение") !== -1) {
    checker(text.toLowerCase(), [
      "аудиторское заключение",
      "сведения об аудируемом лице",
      "сведения об аудиторе",
      "основание для выражения мнения",
      "ответственность аудитора",
    ]);
    return ;
  }

  if (text.toLowerCase().indexOf("презентация компании") !== -1) {
    checker(text.toLowerCase(), [
      "презентация компании",
      "история компании",
      "обзор рынка",
      "обзор компании",
    ]);
    return ;
  }
};
