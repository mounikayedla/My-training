"use strict";
function* createGenerator() {
    yield 1;
    console.log("After 1st yield");
    yield 2;
}
let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
let Persons = {
    f1name: "Mounika",
    l1name: "Raj"
};
Persons[Symbol.iterator] = function* () {
    let properties = Object.keys(Persons);
    for (let t of properties) {
        yield this[t];
    }
};
for (let r of Persons) {
    console.log(r);
}
//# sourceMappingURL=generator.js.map