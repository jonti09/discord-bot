import axios from 'axios';

export const fetchInsult = async () => {
  const URL = 'https://evilinsult.com/generate_insult.php?lang=en&type=json';
  const data = await axios(URL);
  return data.data.insult;
};
