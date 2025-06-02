const A = async function taskA() { 
    try{
        const res1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user1 = await res1.json();
        console.log(user1)
    } catch(err) {
        console.error('Invalid user')
    }
 }
const B = async function taskB() { 
    try{
        const res2 = await fetch('https://jsonplaceholder.typicode.com/users/2');
        const user2 = await res2.json();
        console.log(user2)
    }
    catch(err) {
        console.error('Invalid link')
    }
 }
const C = async function taskC() { 
    try{
    const res3 = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const user3 = await res3.json();
    console.log(user3)
    }
    catch(err) {
        console.error('Invalid link01')
    }
}

const Promises = [A, B, C];
async function runSequential(arr) {
    for (let func of arr){
        await func;
    }
}

// Version 2: Run concurrently (should take ~1 second)
async function runConcurrent(arr) {
  await Promise.all(arr);
}

runSequential(Promises);