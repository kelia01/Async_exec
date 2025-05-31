console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

async function test() {
  console.log('5');
  await Promise.resolve();
  console.log('6');
}

test();

console.log('7');

// What order will the numbers 1-7 be logged?
// Explain why this order occurs.
