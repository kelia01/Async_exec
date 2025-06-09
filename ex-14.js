async function sayJoke(apiUrl, jokeId){
    try{
      const jokes = await fetch(apiUrl);
      if(!jokes.ok){
        throw new Error(`No jokes at url: ${apiUrl}`);
      }
      const jokesJson = jokes.json();
      const result = jokesJson.filter((joke) => {
        if(!jokesJson.includes(jokeId)) throw new Error (`No jokes found id: ${jokeId}`)
        return joke.id === jokeId;
        });
      
    } catch(err) {
      console.error(`failed to fetch might be network problems: ${err.message}`);
    }
  }