import {add} from "./named-export.js";
import {default as substracting} from "./default-export.js";
import multiply, {divide} from "./mixed-export.js";
const _mbt = require("./commonjs-export.js").mbt;
const _dbt = require("./commonjs-export.js").dbt;

const a = add(1,2);           // 3
const b = substracting(5,3);  // 2
const c = multiply(2,3);      // 6
const d = divide(4,2);        // 2
const e = _mbt(4)             // 8
const f = _dbt(10)            // 5

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
