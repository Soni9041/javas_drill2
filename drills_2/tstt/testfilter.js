function cb(value){
    if(sm<=value){
        ar.push(value);
    }
    return ar;
}
const items = [1, 2, 3, 4, 5, 5];
const f1 = require('../filter');
const result=f1.filter(items,cb);
console.log(result)