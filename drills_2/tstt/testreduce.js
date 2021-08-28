function cb(value){
    return value+items[i];
}
const items = [1, 2, 3, 4, 5, 5];
const f1 = require('../reduce');
const result=f1.reduce(items,cb);
console.log(result)