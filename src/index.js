import sum from './sum.js';
import callMyFunction from './callMyFunction.js';

console.log(sum(1, 2));

callMyFunction(function() {
  console.log('Hello world');
});
