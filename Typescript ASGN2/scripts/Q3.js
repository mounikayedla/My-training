"use strict";
let LowNumber = 1134;
function third_armstong() {
    if (LowNumber >= 1000) {
        console.log("Exceeds 1000");
        LowNumber = 1134;
    }
    else {
        for (let i = LowNumber; i > 0; i++) {
            let NumberOfDigits = i.toString().length;
            let sum_i = 0;
            let temp_i = i.toString();
            for (let char of temp_i) {
                sum_i += Math.pow(parseInt(char), NumberOfDigits);
            }
            if (sum_i == i) {
                console.log(i);
                LowNumber = i;
                break;
            }
        }
    }
}
function getNextArmstrong_no() {
    LowNumber++;
    third_armstong();
}
getNextArmstrong_no();
//# sourceMappingURL=Q3.js.map