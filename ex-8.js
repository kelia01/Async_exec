async function getUserLikes(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((result) => {
        if(!result.ok){
            throw new Error(`Failed to load user data`)
        }
        return result.json();
    })
    .then((user) => {
       return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    })
    .then((response) => {
        if(!response.ok){
            throw new Error(`Failed to load user posts`)
        }
        return response.json();
    })
    .then((posts) => {
        posts.forEach(post => post.likes = Math.floor(Math.random() * 100));
        return posts.reduce((sum, post) => sum + post.likes)
    })
    .catch(err => console.log(`error occured: ${err.message}`));
}
getUserLikes(1)