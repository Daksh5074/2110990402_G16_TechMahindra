// let student1={
//     firstName:"jane",
//     lastName:"Doe",

//     // getName:function(){
//     //     console.log(this.firstName,this.lastName);
//     // },

//     // getResult:function(){
//     //     console.log("passed");
//     // }
// }
// let getName=function(classStudent){
//     console.log(this.firstName,this.lastName,"from class",classStudent)
// }
// let student2={
//     firstName:"kunal",
//     lastName:"Rana",

//     // getName:function(){
//     //     console.log(this.firstName,this.lastName);
//     // },

//     // getResult:function(){
//     //     console.log("passed");
//     // }
// }


// // call()
// // getName.call(student1);
// // getName.call(student2);

// const getStudent1=getName.call(student1, "G16");
// const getStudent2=getName.call(student1, ["G16,G14"]);




// document.getElementById("grandparent").addEventListener("click",()=>{
//     console.log("THIS IS GRANDPARENT DIV")
// },false)

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("THIS IS PARENT DIV")
// },false)

// document.getElementById("child").addEventListener("click",()=>{
//     console.log("THIS IS CHILD DIV")
// },false)

// document.getElementById("cs").addEventListener("click",()=>{
//     window.location.href="localhost/cs"
// });

// document.getElementById("ece").addEventListener("click",()=>{
//     window.location.href="localhost/ece"
// });

// document.getElementById("me").addEventListener("click",()=>{
//     window.location.href="localhost/me"
// });


// document.getElementById("subjects").addEventListener("click",(e)=>{
//     window.location.href=e.target.id;
//     console.log("http://localhost/"+e.target.id);
// })

// document.getElementById("searchbox").addEventListener("input",deBouncingFunction);
// let whichcall=0
// let timeout=0;
// function fetchData(){
//     console.log("fetching api data",whichcall++)
// }

// function deBouncingFunction(){
//     clearTimeout(timeout)
//     setTimeout(fetchData,2000);
// }