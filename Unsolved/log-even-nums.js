//TODO: Write code to print all **even** numbers from 0 to `num`
//! Assume `num` will be a positive number

var logEvenNums = function(num) {
   // console.log(num);

    // loop through 0 - num
    for (i = 0; i <= num; i++) {

        // find the remainder of i
        var remainder = i % 2;

        // if the remainder !== 0, it is odd (bc we want 0/2=even)
        // else, it is even
        if (remainder !== 0) {
        } else {
            console.log(i);
        }
    };

};
