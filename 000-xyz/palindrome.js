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

const palindromeChecker = (str = ``, debug = false) => {
  let result = false;
  if(str.length <= 1) {
    return true;
  } else {
    if(str.length === 2) {
      const left = str.slice(0, 1);
      const right = str.slice(1);
      return left === right;
    } else {
      const len = Math.floor(str.length / 2);
      const left = str.slice(0, len);
      const right = str.slice(len + 1);
      if(left === Array.from(right).reverse().join(``)) {
        return true;
      }
    }
  }
  return result;
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
