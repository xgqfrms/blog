"use strict";

/**
 * 
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-05-25
 * @modified 
 * 
 * @description palindrome 回文
 * @augments 
 * @example 
 * @link 
 * 
 */

const log = console.log;

const palindromeChecker = (str = ``) => {
  const len = str.length;
  // const arr = Array.from(str);
  // if(len <= 1) {
  //   return true;
  // }
  for (let i = 0; i < Math.ceil(len / 2); i++) {
    // if(arr[i] !== arr[len - 1 - i]) {
    if(str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

// test
const t1 = palindromeChecker(`123`);
const t2 = palindromeChecker(`11`)
const t3 = palindromeChecker(`12`)
const t4 = palindromeChecker(`12345`)
const t5 = palindromeChecker(`12321`)

log(`t1`, t1)
log(`t2`, t2)
log(`t3`, t3)
log(`t4`, t4)
log(`t5`, t5)
// t1 false
// t2 true
// t3 false
// t4 false
// t5 true


// export default palindromeChecker;

// export {
//   palindromeChecker,
// };
