

// function fetchUserCallback(userId, callback) {
//     setTimeout(() => {
//       if (userId > 0) {
//         callback(null, { id: userId, name: 'John' });
//       } else {
//         callback(new Error('Invalid user ID'));
//       }
//     }, 1000);
//   }
  
  // Convert to Promises:
  
  function fetchUserPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId > 0){
                resolve({id: userId, name: 'John'});
            }
                reject(new Error('Invalid user ID'))
           
        }, 1000)
    })
  }
  
  // Should work like:
   fetchUserPromise(1).then(user => console.log(user));
   fetchUserPromise(-1).catch(err => console.log(err.message));
  