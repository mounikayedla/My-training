const first = new Promise<number>((resolve, reject)=> {resolve(5);});
const second = new Promise<number>((resolve, reject)=> {resolve(10);});
Promise.all([first, second]).then((values) =>
{
    const total = values.reduce((p, c) => p + c);
    console.log(total);
});