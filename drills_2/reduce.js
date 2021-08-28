function reduce(items,cb){
    var sm=0;
    for(var i=0;i<items.length;i++){
        sm+=items[i];
    }
    return sm;
}

module.exports={reduce};