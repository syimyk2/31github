const createCounter = function (n) {
	return function () {
		return n++
	}
}

const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12


//2


var createCounter2 = function(init) {
    let presentCount = init
    return {
        increment:()=> ++presentCount,
        decrement:()=> --presentCount,
        reset:()=> presentCount = init,
    }
};

/**
 * const counter = createCounter2(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

//3
var map = function(arr, fn) {
    const transformedArr = [];
    arr.forEach((element, index) => {
      transformedArr[index] = fn(element, index);
    });
    return transformedArr;
  };