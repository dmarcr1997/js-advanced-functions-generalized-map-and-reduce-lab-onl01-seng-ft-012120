// Add your functions here
function map(src, f){
    let newA = [];
    for(let i = 0; i < src.length; i++){
        newA.push(f(src[i]));
    }
    return newA;
}

function reduce(src, f, start){
    let s;
    let i;
    if (!!start){
        s = start;
        i = 0;
    }
    else{
        i = 1;
        s = src[0];
    }
    for(; i < src.length; i++){
        s = f(src[i], s);            
    }
    return s;

}