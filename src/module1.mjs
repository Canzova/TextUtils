// For something which is exported deafult we can use any variable name like we have used cx here in this case

// But when we are receiving something which is not default exported we have to use same varibles name is curly bracets {}

import x, {b, c, d} from "./module2.mjs";

console.log(x);
console.log(b);
console.log(c);
console.log(d);