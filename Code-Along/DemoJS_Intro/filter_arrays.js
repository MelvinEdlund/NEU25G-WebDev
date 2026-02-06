
let numbers = [1,8, 4, 33, 28, 55, 78, 90, 124, 2];

//Ta fram alla nummer mellan 5 och 60
let numbers_result_5_60 = numbers.filter(number => number > 5 && number < 60)
                                 .sort((a,b) => b-a);

                                 
console.log(numbers_result_5_60);
console.log(numbers_result_5_60[0]);
