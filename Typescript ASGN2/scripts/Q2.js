"use strict";
let lowNumber = 134;
function armstong() {
    if (lowNumber >= 1000) {
        console.log("Exceeds 1000");
        lowNumber = 1634;
    }
    else {
        for (let i = lowNumber; i > 0; i++) {
            let numberOfDigits = i.toString().length;
            let sum = 0;
            let temp = i.toString();
            for (let char of temp) {
                sum += Math.pow(parseInt(char), numberOfDigits);
            }
            if (sum == i) {
                console.log(i);
                lowNumber = i;
                break;
            }
        }
    }
}
function getNextArmstrong() {
    lowNumber++;
    armstong();
}
getNextArmstrong();
//# sourceMappingURL=Q2.js.map