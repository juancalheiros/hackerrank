var assert = require('assert');
var dojo = require('../src/dojo');

describe('Maximun value array ', function () {
    it('[1,2,3,4,5] should return 5', function () {
        // arrange
        const arr = [1, 2, 3, 4, 5]

        //act
        const result = dojo.maximumValue(arr)

        //assert
        assert.equal(result, 5)
    });
});

describe('Minumum value array ', function () {
    it('[1,2,3,4,5] should return 1', function () {
        // arrange
        const arr = [1, 2, 3, 4, 5]

        //act
        const result = dojo.minimumValue(arr)

        //assert
        assert.equal(result, 1)
    });
});

describe('Sum of value array ', function () {
    it('[1,2,3,4,5] should return 15', function () {
        // arrange
        const arr = [1, 2, 3, 4, 5]

        //act
        const result = dojo.sumValues(arr)

        //assert
        assert.equal(result, 15)
    });
});

describe('maximum and minimum difference in values ', function () {
    it('[1,2,3,4,5]should return 10 14', function () {
        //arrange
        const arr = [1, 2, 3, 4, 5]

        //act 
        result = dojo.sumMinMax(arr)

        //assert
        assert.deepEqual(result, [10, 14]);
    });
});
