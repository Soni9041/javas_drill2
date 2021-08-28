function filter(items,cb){
    var ar=[];
    var sm=3;
    for(var i=0;i<items.length;i++){
        if(sm>=items[i]){
            ar.push(items[i])
        }
    }
    return ar;
}

module.exports={filter};