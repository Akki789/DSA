//Two sum
function twoSum(arr, target){
    let freq = {};
    for(let i=0; i<arr.length; i++){
        let need = target - arr[i];

        if(need in map ){
            return [map[need], i]
        }

        map[arr[i]] = i;
    }
    return []
}
