function maps(items,cb){
    var ar=[];
    for(var i=0;i<items.length;i++){
        ar.push(cb(items[i]));
    }
    return ar;
}

module.exports={maps};