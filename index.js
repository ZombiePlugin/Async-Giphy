async function getImage(query) {
  let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=MGL1odT9huYYFRBEBTe2bJ1gI9bccWaJ&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const randomNum = Math.floor(Math.random() * 25);
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data.data[randomNum].url);
}

getImage("cat");
