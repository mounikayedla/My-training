let displayColors=function(message:any,...colors:any[]){
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for(let i in colors){
        console.log(colors[i]);
    }
}
let message ="List of Colors"
let colorArray=['Orange','Yellow','Indigo'];
displayColors(message,...colorArray);
// displayColors(message,'Red');
// displayColors(message,'Red','Blue');
// displayColors(message,'Red','Blue','Green');