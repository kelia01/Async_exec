//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.


function invokeAfterDelay(callback) {
  return setTimeout(callback, 2000); // 2000 milliseconds = 2 second
}
function display_message() {
  console.log('Hello!');
}
console.log(invokeAfterDelay(display_message));