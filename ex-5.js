const urls = [
  'https://jsonplaceholder.typicode.com/users/1',   // succeeds
 'https://jsonplaceholder.typicode.com/users/9999', // fails (404)
  'https://jsonplaceholder.typicode.com/users/2'   // succeeds
];

// Write a function that fetches all URLs and:
// 1. Stops on first failure (using Promise.all)
async function fetchAllOrFail(urls) {
    try{
        const responses = await Promise.all(urls.map(async (url) => {
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(`Url failed at status ${res.status} at ${url}`);
            }
            return res.json();
        }));
        return responses;
    } catch(err){
        console.error('Fetch unsuccessful', err.message);
    }
}

// fetchAllOrFail(urls);

// 2. Continues even if some fail (using Promise.allSettled)
async function fetchAllResults(urls) {
    const results = await Promise.allSettled(urls.map( async (url) => {
        try{
            const res = await fetch(url);
            if (!res.ok) {
      throw new Error(`Failed with status ${res.status} at ${url}`);
    }
    return res.json();
        } catch (err) {
            throw err;
        }
    }));

    results.forEach((result, index) => {
        if(result.status === 'fulfilled'){
            console.log(`Success [${urls[index]}]:`, result.value);
        } else {
            console.error(`Failed [${urls[index]}]:`, result.reason.message);
        }
    });
}
fetchAllResults(urls);
