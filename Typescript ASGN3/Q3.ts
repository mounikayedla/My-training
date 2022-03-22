interface Printable
{
    name?: string;
    id?:number;
    radius?:number;
}

var employee: Printable = 
{
    name:"Mounika",
    id:13
};

var circle: Printable = 
{
    radius:2
};

function printAll(employee:any, circle:any)
{
    console.log(employee.name + " " + employee.id);
    console.log(circle.radius);
}
printAll(employee,circle);