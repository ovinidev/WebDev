function calcularMedia(){                    
                    
    var total = 0;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return total / x;
}