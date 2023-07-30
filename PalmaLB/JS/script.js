let urcr = document.querySelector("#URCR");
let text1 = document.querySelector("#text1");
let urca = document.querySelector("#URCA");
let text2 = document.querySelector("#text2");

text1.style.opacity = "0";


urcr.addEventListener("click",()=> {
    if(text1.style.opacity === "0" ) {
       text1.style.visibility = "visible";
       text1.style.lineHeight = "1.42857143";
       text1.style.opacity = "1";
    } else {
       text1.style.lineHeight = "0";
       text1.style.visibility = "hidden";
       text1.style.opacity = "0";
    }
 })

 text2.style.opacity = "0";

 urca.addEventListener("click",()=> {
   if(text2.style.opacity === "0" ) {
      text2.style.visibility = "visible";
      text2.style.lineHeight = "1.42857143";
      text2.style.opacity = "1";
   } else {
      text2.style.lineHeight = "0";
      text2.style.visibility = "hidden";
      text2.style.opacity = "0";
   }
})

