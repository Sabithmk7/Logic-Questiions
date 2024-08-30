// This repository contains a JavaScript function to determine the greatest common divisor (GCD) of the smallest and largest numbers in a given array.
// The function is implemented in a way to efficiently find the GCD based on the input array.


var findGCD = function(nums) {
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    let num=[]
    let i=0
    for(i=0;i<=max;i++){
        if(min%i==0&&max%i==0){
            num.push(i)
        }
    }
    return Math.max(...num)
};
