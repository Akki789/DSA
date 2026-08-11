//flatten object using recursion

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }

  return result;
}

const obj = {
  name: "Akash",
  address: {
    city: "Pune",
    state: "Maharashtra",
  },
};

console.log(flattenObject(obj));
//Practice 2
function flattenObject2(obj, parentKey="", res={}){
  for(let key in obj){
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if(typeof obj[key] == "object" && obj[key] !== null && !Array.isArray(obj[key])){
      flattenObject2(obj[key], newKey,res)
    }else{
      res[newKey] = obj[key]
    }
  }
  return res;
}
console.log(flattenObject2(obj));