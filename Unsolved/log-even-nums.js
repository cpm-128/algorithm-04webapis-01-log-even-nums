//TODO: Write code to print all **even** numbers from 0 to `num`
//! Assume `num` will be a positive number

var logEvenNums = function(num) {
    console.log(num);

    // // logs all nums 0 - num
    // for (i = 0; i <= num; i++) {
    //     console.log(i);
    // };

    // loop through 0 - num
    for (i = 0; i <= num; i++) {

        // find the remainder of num
        var remainder = i % 2;

        // if the remainder !== 0, it is odd (bc we want 0/2=even)
        // else, it is even
        if (remainder !== 0) {
            console.log(i);
        } else {
            console.log('even');
        }
    };

};
