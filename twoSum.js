var twoSum = function(nums, target) {
    let a=[];
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                a.push(i);
                a.push(j);
            }
        }
    }
    return a;
};