
var commonFactors = function(a, b) {
    let c=0;
    for(i=1;i<=Math.min(a,b);i++){
        a%i==0&&b%i==0?c++:0;
    }
    return c;
};
