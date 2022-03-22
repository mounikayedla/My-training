
class Person{
    wish(){}
}
let m=new Person();
// function em(){}
// em();

console.log(m.wish === Person.prototype.wish);
class mouni{
    nm: any;
    constructor(nm:any){
        this.nm=nm;
        console.log(this.nm+"Constructor");
    }
static staticMethod(){
    console.log("Static Method");

}
gReetmouni(){
    console.log("hello"+this.nm);
}
}
//class inheritance
let n=new mouni("chandler");
mouni.staticMethod();
n.gReetmouni();
class raj{
    constructor(nme: string){
        console.log(nme+"person constructor");
    }
getID(){
    return 10;
}
}
class MNK extends raj{
    
constructor(nme: string){
    
    super(nme);
    console.log(nme+"emp constructor");
   

}
getID(){
    return super.getID();
}
    
}

let e=new MNK("chandler");
console.log(e.getID());