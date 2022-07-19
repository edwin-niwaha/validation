// /pattern/modifiers
let text = "Institute refactory uganda";
let n = text.search("Refactory");
console.log(n)

let x = text.search(/Refactory/i);
console.log(x)

let site = "Welcome student";
let result = site.replace(/student/i,"Admin");
console.log(result)
/* javascript identifiers
i - case senstive
g - global match
m - multi-line matching
*/

//[abc]
let motor = "This is a big car";
let results = motor.search(/[ab]/g)
console.log(results);

// [0-9]
// [a-z]
// [A-Z]

//test
const pattern = /e/
pattern.test("Code is awesome");
/x/.test("Code is awesome!")
