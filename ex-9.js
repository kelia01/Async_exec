async function processUsers(userIds) {
  try {
    let results = [];
    for (let id of userIds) {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      results.push(await res.json());
    }
    return results;
  } catch (err) {
    console.error(`error occured: ${err.message}`);
  }
}
const processUsersPromise = async (userIds) => {
  try {
    let results = await Promise.all(
      userIds.map(async (id) => {
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        return await res.json();
      })
    );
    return results;
  } catch (err) {
    console.error(`error occured: ${err.message}`);
  }
};
processUsers([1, 2, 3]).then(console.log);

// Fix it to properly wait for all users to be fetched
// Provide two solutions:
// 1. Using for...of loop
// 2. Using Promise.all with map
