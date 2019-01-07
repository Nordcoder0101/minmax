function minMax(arr){
  let max = arr[0];
  let min = arr[0];
  let sum = 0

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i]
    }
    if (arr[i] < min){
      min = arr[i]
    }
    sum += arr[i];
  }
  let average = sum / arr.length;

  let returnString = `The min is ${min}, the max is ${max}, the average is ${average}`
  
  console.log(returnString)
  return returnString;
}

minMax([1,2,3,4,6,7,8,66])