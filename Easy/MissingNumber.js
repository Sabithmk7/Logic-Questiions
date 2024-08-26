//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function(nums) {
    let sum =nums.reduce((a,v)=>a+v,0);
    let actualSum=0;
    for(i=1;i<=nums.length;i++){
        actualSum=actualSum+i;
    };
    return actualSum-sum;
};
