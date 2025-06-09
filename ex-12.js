/*- Function `asyncCounter()` counts 1, 2, 3, 4, 5
- 1-second delay between each number
- Return a promise that resolves with `[1, 2, 3, 4, 5]`
- Use async/await or promise chaining */

async function delay(ms) {
    return new Promise (resolve => setTimeout(resolve, ms))
}
async function asyncCounter() {
    let results = [];
    for(let i = 1; i < 6; i++){
        await delay(1000);
        console.log(i);
        results.push(i);
    }
    return results;
}
asyncCounter().then(res => console.log(res))