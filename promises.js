function medicine1get(){
    return new Promise(function(resolve){
        setTimeout(resolve,10000);

    })
}

medicine1get().then(function(){
    console.log("medicine 1 recieved");
})