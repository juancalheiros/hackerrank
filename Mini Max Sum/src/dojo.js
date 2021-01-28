function sumValues(array) {
	return array.reduce((currentValue, sumer) => currentValue + sumer)
}

function maximumValue(array) {
	return Math.max(...array)
}

function minimumValue(array) {
	return Math.min(...array)
}

function sumMinMax(arr) {
	const numberMaximum = maximumValue(arr), numberMinimum = minimumValue(arr), sum = sumValues(arr)

	return [(sum - numberMaximum), (sum - numberMinimum)]
}

module.exports = { sumMinMax, sumValues, maximumValue, minimumValue };
