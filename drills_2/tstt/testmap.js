function cb(value){
    return value * 5;
}

const items = [1, 2, 3, 4, 5, 5];
const f1 = require('../map');
const result  = f1.maps(items,cb);
console.log(result)