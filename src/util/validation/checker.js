/* eslint-disable array-callback-return */
export const checker = (text, array) => {
  const response = {};
  array.map((el, index) => {
    response[index+'_check'] = { 
      check: text.indexOf(el.toLowerCase()) !== -1 ? true : false, 
      text: el 
    };
  });
  localStorage.setItem('checks', JSON.stringify(response));
}