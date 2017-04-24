function addition(arr){
    var result = 0;
    for (var i = 2; i < arr.length;i++){
        result += +arr[i];
    }
    console.log(result);
}

addition(process.argv);