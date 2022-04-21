let testObject = {
	key1: 40,
	key2: 491,
	key3: 991,
	key4: 819,
	key5: 138,
	key6: 481,
	}

function logKeys() {
	for (const key in testObject)
		console.log(key + ": " + testObject[key])
	}

sum = 0;

function sumKeys() {
	for (const [key, value] of Object.entries(testObject))
	sum += value
	console.log(sum)
	}
	
logKeys();
sumKeys();