

// const myPromiseFromNetflix=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject("Fetched Data From Netflix");
//     },3000)
// });

// const myPromiseFromTwitter=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject("Fetched Data From Twitter");
//     },7000)
// });

// const myPromiseFromGitHub=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data From GitHub");
//     },2000)
// });

// const myPromiseFromHotstar=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Fetched Data From Hotstar");
//     },4000)
// });

//promise.all()

// const dataFromAll=Promise.all([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar]);
// console.log(dataFromAll);


//promise.allSettled

// const dataFromAll=Promise.allSettled([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar]);
// console.log(dataFromAll);


// promise.race

// const dataFromAll=Promise.race([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar]);
// console.log(dataFromAll);

//promise.any
// const dataFromAll=Promise.any([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar]);
// console.log(dataFromAll);



//Async-AWait
//ASYNC IS ALSO A PROMISE

// async function techDirectFunction(){
//     console.log("This is hello tech mahindra");
// }

// const techData=techDirectFunction();
// console.log(techData);
// techData.then((res)=>{
//     return res;
// })

// const samarPromised=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("I will be on time");
//     },4000)
// })

// console.log("Hello Class");

// function techMahindra(){
//     const promiseOfSAmar=samarPromised;
//     console.log(promiseOfSAmar));
// }

// console.log("Class end");
// techMahindra()



//=========================================

// console.log("class start")

// const projectSubmissionByKuber=new Promise(function(res,rej){
//     setTimeout(() => {
//         res("submitted successfully")
//     }, 5000);
// });

// console.log("class lunch");

// async function projectEvaluation(){
//     console.log("attendance viva")
//     const projectFile=await projectSubmissionByKuber;
//     console.log(projectFile)
//     console.log("project file check");
// }

// projectEvaluation();

// console.log("class end");

//////////////////////////////////////

// console.log("class start")

// const fileWritingByKuber=new Promise(function(res,rej){
//     setTimeout(() => {
//         res("Kuber file written")
//     }, 10000);
// });



// async function fileCheckEvaluation(){
//     console.log("Attendance marking");
//     const projectFile=await fileWritingByKuber;
//     console.log(projectFile)
//     console.log("file evaluation")

// }




// projectEvaluation();

// console.log("class end");

/////////////////////////////////////////////////////

//https://api.chucknoo
async function fetchApiData(){
   try{ const data=await fetch("https://api.chucknorris.io/jokes/categories");
    const mydata=await data.json();
    return mydata;
   }
   catch (err){
    console.log(err)
   }
}

const finalData=fetchApiData();
finalData.then((res)=>{
console.log(res)
})
 