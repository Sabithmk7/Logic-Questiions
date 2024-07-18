
var containsDuplicate = function (nums) {
    let arr = new Set(nums);
    if (nums.length !== arr.size) {
        return true;
    }
    return false;
};
