let title=document.querySelector(".title");
let buttons=document.querySelector(".buttons");
let optionOneButton=document.querySelector(".option-one");
let optionOneScreen=document.querySelector(".option-one-screen");
let openingScreen=document.querySelector(".story-opening");
let optionTwoButton=document.querySelector(".option-two");
let optionTwoScreen=document.querySelector(".option-two-screen");
let optionThreeButton=document.querySelector(".option-three");
let optionTwoEnd=document.querySelector(".option-two-end");
let optionFourButton=document.querySelector(".option-four");
let optionOneEnd=document.querySelector(".option-one-end");
let opt2=document.querySelector(".opt2");
let optionFiveButton=document.querySelector(".option-five");
let optionSixButton=document.querySelector(".option-six");
let optionThreeEnd=document.querySelector(".option-three-end");
let back=document.querySelector(".back");
let Audio=document.querySelector("audio")

optionOneButton.onclick = function(){
  optionOneScreen.style.display = "block";
  title.style.display="none";
  openingScreen.style.display="none";
  buttons.style.display="none";
};


optionTwoButton.onclick = function(){
  console.log("block")
  optionTwoScreen.style.display="block";
  openingScreen.style.display="none";
  title.style.display="none";
  openingScreen.style.display="none";
  buttons.style.display="none";
  
};



optionThreeButton.onclick=function(){
  optionOneEnd.style.display="block";
  optionOneScreen.style.display="none";
  back.innerHTML = "You Can't Escape";
  Audio.autoplay = true;
  
}
optionFourButton.onclick=function(){
  optionTwoEnd.style.display="block";
  optionOneScreen.style.display="none";
  
}


optionFiveButton.onclick=function(){
  optionThreeEnd.style.display="block";
  optionOneScreen.style.display="none";
  optionTwoScreen.style.display="none";
}
optionSixButton.onclick=function(){
  optionTwoEnd.style.display="block";
  optionTwoScreen.style.display="none";
  
}






















/* Declare variables below to save the different sections (divs) of your story*/









/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
