function cb(value){
    if(value==sm){
        return true;
    }
}
const items = [1, 2, 3, 4, 5, 5];
const f1 = require('../find');
const result=f1.find(items,cb);
console.log(result)