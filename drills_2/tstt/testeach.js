function cb(value,a){
    console.log(value+':'+a);
}
const items = [1, 2, 3, 4, 5, 5];
const f1 = require('../each');
const result=f1.each(items,cb);
console.log(result)