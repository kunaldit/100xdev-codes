function printPartialRow(n){
    var str ="";
    str = str + "*";
    for (var i=0; i<n-2;i++){
        str= str + " "
    }
    str = str + "*";
    console.log( str);
}

// console.log(printPartialRow(5));
function printSingleFullROw(n){
    var str ="*"
    for (var i =0; i<n;i++){
        str = str + "*"
    }
    console.log( str);
}
function printWholeThing(n){
    printSingleFullROw(n);
    for(var i=0;i<n-2;i++){

    
    printPartialRow(n);
    }
    printSingleFullROw(n);
}

console.log(printWholeThing(5));