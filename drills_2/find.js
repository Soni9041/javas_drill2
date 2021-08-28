function find(items,cb){
    var st="undefined";
    var sm=7;
    for(var i=0;i<items.length;i++){
        if(items[i]==sm){
            st="true";  
            break; 
        }
    }
    return st;
}

module.exports={find};