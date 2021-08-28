//const items = [1, 2, 3, 4, 5, 5];
function each(items,cb){
    for(var i=0;i<items.length;i++){
        cb(items[i],i);
    }
}

module.exports={each};