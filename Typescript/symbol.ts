let s=Symbol("First symbol");
console.log(typeof s);
console.log(s.toString());
let s2=Symbol("Test");
let s3=Symbol("Test");
console.log(s2===s3);
let s4=Symbol.for("RegSymbol");
let s5=Symbol.for("RegSymbol");
console.log(s4===s5);
console.log(Symbol.keyFor(s4));
let nme=Symbol("Firstname");
let persob={
    [nme]:"Mounika"
};
console.log(Object.getOwnPropertyNames(persob));
console.log(Object.getOwnPropertySymbols(persob));
let str="Hello";
let arr=[1,2,3];
let num=5;
let obj={namee:"Mounika"};
console.log("For String"+typeof str[Symbol.iterator]);
console.log("For array"+typeof arr[Symbol.iterator]);
console.log("For number"+typeof num[Symbol.iterator]);
console.log("For object"+typeof obj[Symbol.iterator]);