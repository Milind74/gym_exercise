export const exerciseOptions = {
  method: "GET",
  // params: {limit: '1200'},
  headers: {
    'X-RapidAPI-Key': '9035903d63msh8b75babdfa60aaap19e0d9jsn1347c6224c4d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  }

export const youtubeOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '9035903d63msh8b75babdfa60aaap19e0d9jsn1347c6224c4d',
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
