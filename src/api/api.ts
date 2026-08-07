import Config from 'react-native-config';
const BASE_URL = Config.BASE_URL;
const TOKEN = Config.TMDB_BEARER_TOKEN;
console.log(BASE_URL, 'BASE URL');
console.log(TOKEN, 'TOKEN');
export const api = async (endpoint: string) => {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  console.log('Status =>', response.status);

  if (!response.ok) {
    const text = await response.text();
    console.log(text);
    throw new Error(`${response.status}`);
  }

  return response.json();
};
