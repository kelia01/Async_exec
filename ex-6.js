async function mystery1() {
  return 'hello';
}

async function mystery2() {
  return Promise.resolve('world');
}

function mystery3() {
  return Promise.resolve('!');
}

// What do these log?
//console.log(mystery1());           // Promise { 'hello' }
//console.log(await mystery1());     // ?
//console.log(mystery2());           // Promise { <pending> }
// console.log(await mystery2());     // Must be in async function
//console.log(mystery3());           // Promise { '!' }
//console.log(await mystery3());     // ?

// Fix this function to properly log "hello world!"
async function fixMe() {
  const a = await mystery1();
  const b = await mystery2();
  const c = await mystery3();
  console.log(a + ' ' + b + c);
}
fixMe();
