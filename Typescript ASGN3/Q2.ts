class Account
{
    id:number;
    name:string;
    balance:number;

    constructor(id_new:number, name_new:string, balance_new:number) {
        this.id = id_new;
        this.name = name_new;
        this.balance = balance_new;
      }
}
   
class SavingsAccount extends Account
{
    interest:number;

    constructor(id_new:number, name_new:string, balance_new:number, int:number) {
        super(id_new,name_new,balance_new);
        this.interest = int;
      }

      totalBalance():number {  
        var totalbalance = this.balance*(this.interest/100)*4;
        return totalbalance;
    } 
}

class CurrentAccount extends Account
{
    interest:number;

    constructor(id_new:number, name_new:string, balance_new:number, int:number) {
        super(id_new,name_new,balance_new);
        this.interest = int;
      }

    totalBalance():number{  
        var totalbalance = this.balance*(this.interest/100)*4;
        return totalbalance;
    }
}

let saving1 = new SavingsAccount(10,"Mounika",7000,7);
let current1 = new CurrentAccount(11,"Mounika",90000,5);  
console.log(saving1.totalBalance());
console.log(current1.totalBalance());