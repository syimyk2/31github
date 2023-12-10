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


  //4 

  var argumentsLength = function(...args) {
    return args.length
};

let array = [1,2,3,4,5];

// we expect argument to be passed in this way
function sum (a,b,c,d,e){
    console.log(a,b,c,d,e) // 1 2 3 4 5 
}

// brute force method 
sum(array[0],array[1],array[2],array[3],array[4]);

// Problem :- we have to pass each value individually & 
// if we have 1000 values in array then 
// we have to pass 1000 arguments in function which is not feasible.


// using spread parameter we can pass all the values of array in one go
sum(...array); 

//spread parameter allows us to pass indefinite number of arguments as an array within a function.
// In the function we can get them as an array and use them as we want.
 
function sum (...args){
    console.log(args) // [1,2,3,4,5]
}

// we can also use rest parameter to get part of arguments as an array
function sum (a,b,...args){
    console.log(a,b,args) // 1 2 [3,4,5]
}
