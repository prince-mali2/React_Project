export const exerciseOptions  = {

        method: 'GET',
        headers: {
          'x-rapidapi-key': 'ab52fa6e9emsh5c1eb0c36d70102p1c7b47jsnb144d27bbeef',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };

  export const youtubeOptions = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'ab52fa6e9emsh5c1eb0c36d70102p1c7b47jsnb144d27bbeef',
          'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };      

export const fetchData = async(url,options)=>{
    const response = await fetch(url, options);
    const data = await  response.json();

    return data;
}