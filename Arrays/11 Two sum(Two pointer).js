// Two sum using two pointer
function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (arr[left] + arr[right] == target) {
      return [left, right];
    }
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
