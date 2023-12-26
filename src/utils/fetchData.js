export const exerciseOptions= {
  method: 'GET',
  // params: {limit: '1200'},
  headers: {
    'X-RapidAPI-Key': 'c5d2d72ad7msha451fa381be9e20p16ba2cjsna5aa1c0f0871',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};