
  export const getGifs = async (categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=F263nOiDkhOLCbpKqKhvmGVFIz5F8wf7&q=${categoria}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium,
      };
    });
   
    return gifs
  };