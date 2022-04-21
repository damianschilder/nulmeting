'use strict'

function reverseString(string) {
    return string.split("").reverse().join("");
}

let myReversedName = "drahciRelttiL";
let myActualName = reverseString(myReversedName);
console.log(myActualName);

