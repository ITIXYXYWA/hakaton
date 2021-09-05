
import { textValidator } from '../util/text-validator';
export const getText = (url) => {
  const client = new XMLHttpRequest();
  client.open('GET', url);
  client.onreadystatechange = () => {
    localStorage.setItem('text', client.responseText)
    textValidator();
  };
  client.send()
}