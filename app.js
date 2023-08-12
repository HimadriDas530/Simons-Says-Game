let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let Level=0;
let h2= document.querySelector("h2");

document.addEventListener("click",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});


let allBtns = document.querySelectorAll(".button");
for(let btn of allBtns){
btn.addEventListener("click",btnPress);
}


// FUNCTION
// flash
function levelUp(){
    // resetting userSeq in each level
    userSeq=[];   
    // setting lvl
    Level++;
    h2.innerText=`Level ${Level}`;
    // getting random button
    let ranIdx=Math.floor(Math.random()*4);
    let ranColor=btns[ranIdx];
    let randBtn= document.querySelector(`.${ranColor}`);
    
    //pushing the generated color into the gameSeq 
    gameSeq.push(ranColor);
    // flash the random button
    gameFlash(randBtn);
   }
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
       btn.classList.remove("flash");
    }, 500);
   }
   
   function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
       btn.classList.remove("userFlash");
    }, 500);
   }
  
   function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
   function checkAns(idx){
       // console.log("curr level:", Level);
       if(userSeq[idx]==gameSeq[idx]){
           if(userSeq.length == gameSeq.length){
               setTimeout(levelUp,1000);
           }
       }
       else{
           h2.innerHTML=`Game Over! your Score was <b>${Level}</b><br> Press any Key to start`;
           document.querySelector("body").style.backgroundColor="red";
           setTimeout(function(){
               document.querySelector("body").style.backgroundColor="white";
           },150);
           reset();
       }
   }
   
  

   function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    Level=0;
}


