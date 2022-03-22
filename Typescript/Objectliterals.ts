let firstname1="chandler";
let lastname="Bing";
let person={
     firstname1,
     lastname
};
// console.log(person.firstname);
// console.log(person.lastname);
function createPerson(firstname1:any,lastname:any,age:any){
    let fullname=firstname1+" "+lastname;
    return {firstname1,lastname,fullname,
    isSenior(){
        return age>60;
    }
    }
}
let p=createPerson("Ross","geller",98);
console.log(p.firstname1);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
