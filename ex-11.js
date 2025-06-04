// Approach 1: Using Promise constructor
function fetchDataPromise(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error('Network problems')
            }
            return response.json();
        })
        .then((data) =>  resolve(data))
        .catch(err => reject(err))
    })
  }
  fetchDataPromise('https://jsonplaceholder.typicode.com/users/1')
  .then(res => console.log(res))
  .catch((err) => console.error(err.message));
  
  // Approach 2: Using async/await
  async function fetchDataAsync(url) {
    try{
        let result = await fetch(url);
        if(!result.ok){
            throw new Error('network problems caused no response')
        }
        return result.json();
    } catch(err){
        console.error('err.message')
    }
  }
  
  // Approach 3: Using .then() chains
  function fetchDataThen(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then((result) => {
            if(!result.ok){
                throw new Error('network problems caused no response')
            }
            return result.json();
        })
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
 
  // All three should:
  // 1. Make a fetch request
  // 2. Parse JSON response
  // 3. Return the data
  // 4. Handle network errors
  // 5. Handle JSON parsing errors
  
  // When would you use each approach?
  
//   fetchDataThen('https://jsonplaceholder.typicode.com/users/1')
//   .then(data => console.log(data))
//   .catch(err => confirm.error(err))