function checkPositive(arr) {
  // Only change code below this line

let allPassed = arr.every(function(element){
	return element > 0;
});

return allPassed

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);