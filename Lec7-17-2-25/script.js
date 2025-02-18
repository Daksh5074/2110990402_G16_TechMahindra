// //callbacks

// function a(){
//     console.log("function a");
// }

// function x(a){
// console.log("function x");
// }



//const element =document.getElementById("btn-click")
// var count=0;
// document.getElementById("btn-click").addEventListener("click",function(){
//     count++;
//     console.log("clicked")
// });


// document.getElementById("btn-click2").addEventListener("click",function(){
//     count++
//     console.log("clicked")
// });


function reachedRestraunt(callback){
    console.log("Reached")
    setTimeout(callback,1000);
}


function tableFinding(callback){
    console.log("table finding")
    setTimeout(callback,1000); 
}


function menuDiscover(callback){
    console.log("menu discover")
    setTimeout(callback,1000);
}


function starter(callback){
    console.log("starter")
    setTimeout(callback,1000);
}


function mainCourse(callback){
    console.log("main course")
    setTimeout(callback,1000);
}


function dessert(callback){
    console.log("dessert")
    setTimeout(callback,1000);
}


function payBill(callback){
    console.log("pay bill")
    setTimeout(callback,1000);
}

//chaining callbacks
//payBill(dessert(mainCourse(starter(menuDiscover(tableFinding(reachedRestraunt()))))))

reachedRestraunt(()=>{
    tableFinding(()=>{
      menuDiscover(()=>{
      starter(()=>{
      mainCourse(()=>{
      dessert(()=>{
      payBill  ()
})
})
})
})
})
})