function compareArrays(arr1, arr2) {
  let result;
	
  if(arr1.length === arr2.length) {
	result = arr1.every((elem, index) => elem === arr2[index]);
  } else {
	result = false;
  }

  return result;
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(element => element > 0 && element % 3 === 0).map(element => element * 10);

  return resultArr; // array
}
