/*function x(){
    console.log("I am X");
}
function y(args){
    console.log("I am Y"); //Y is a higher oder function
    args();
}
y(x);*/   //x is a callback function


//////////HIGHER ORDER FUNCTION/////////////



/*function doubleOfData(data){
    doubleOfDataArr=[];
    for(let i=0;i<=data.length;i++){
        doubleOfDataArr.push(data[i]*2);
    }
}
console.log(doubleOfData(data));*/


/*data=[2,4,6,8,10];
const calculateDoubleData= function(data){
    var output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]*2);
    }
    return output;
}

const calculateHalfData=function(data){
    var output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]/2);
    }
    return output;

}

const calculateAddTen= function(data){
    const output=[];
    for(let i=0;i<data.length;i++){
        output.push(data[i]+10);
    }
    return output;
}

console.log(calculateDoubleData(data));
console.log(calculateHalfData(data));
console.log(calculateAddTen(data));*/

// data = [2,4,6,8,10]

// var insideData=10;

// function DoubleData(data){
//     var ans=insideData*2;
//     return ans;
// }
// }
// function HalfData(data){
//     var ans=insideData/2;
//     return ans;

// }
// function AddTen(data){
//     var ans=insideData+10;
//     return ans;

// }
// const calculateData=function(data,callback){
//     console.log("we are inside calculateData");
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(callback(data[i]));
//     }
//     return output;
// }

//Polyfill of Map feature of js;
//By using Protype

// Array.prototype.mapp =function(callback){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(callback(this[i]));
//     }
//     return output;
// }
// console.log(data.mapp(DoubleData));

// data=[2,4,6,8,10]
//console.log(data.map(DoubleData));
/*console.log(calculateData(data,DoubleData));
console.log(calculateData(data,HalfData));
console.log(calculateData(data,AddTen));*/

// data=[2,9,16,42,71];
// function diameter(i){
//     return i*2;
// }
// function circumference(i){
//     return 2*3.14*i;
// }
// function area(i){
//     return 3.14 *i*i;
// }

// console.log(data.map(diameter));
// console.log(data.map(circumference));
// console.log(data.map(area));


////////////////////////////


// data=[2,1,3,4,7,8,5];

// data =[2,4,6,3,7];
// //using function 
// const oddOutput = function odd(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         if(data[i]%2!=0){
//             output.push(data[i]);
//         }
//     }
//     return output;
// }
// console.log(oddOutput(data));
// //using prototype
// function oddNum(num){
//     if(num%2!=0){
//         return num;
//     }
// }

// Array.prototype.mapp=function(logic){
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         if(this[i]%2!=0){
//             output.push(logic(this[i]));
//         }
//     }
//     return output;
// }
// console.log(data.mapp(oddNum));

// //using filter
// console.log(data.filter((num)=>{
//     return num%2!=0;
// }));


const users=[
    {firstName:"Pratiyush",lastName:"Ray",age:25},
    {firstName:"Daksh",lastName:"preet",age:22},
    {firstName:"Dhruv",lastName:"jain",age:20},
    {firstName:"aryan",lastName:"Rohilla",age:28},
    {firstName:"Prateek",lastName:"saini",age:40},
    ]

    //Lets combine fist name & last name

    const FullName=users.map((user)=>
        user.firstName+" "+user.lastName);

       console.log(FullName)