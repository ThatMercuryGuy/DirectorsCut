// console.log("Hello World");

let searchBox = document.getElementById("searchBox");
let submit = document.getElementById("searchButton");
let imageContainer = document.getElementById("imageContainer")
let imageBox = document.getElementById("imageBox")
let userPrompt = "";
let time = document.getElementById("time");
let no = document.getElementById("no");
console.log(imageContainer);
let exPrompt = document.getElementsByClassName("exPrompt");
for(let i = 0; i < exPrompt.length; i++)
{
       exPrompt[i].addEventListener("click", function(){
              searchBox.value = exPrompt[i].innerText;
       })
}
 


function hello()
{
       console.log("Hello World")
}


submit.addEventListener("click", function(){
       userPrompt = searchBox.value;
       const dict_values = {userPrompt};
       const s = JSON.stringify(dict_values);
       console.log(s);
       searchBox.value = "";
       time.style.opacity = 1;

       setTimeout(function(){
              time.innerText = "Time: 4";
       }, 1000);
       setTimeout(function(){
              time.innerText = "Time: 3";
       }, 2000);
       
       setTimeout(function(){
              time.innerText = "Time: 2";
       }, 3000);
       
       setTimeout(function(){
              time.innerText = "Time: 1";
       }, 4000);
       
       setTimeout(function(){
              window.location.reload();
       }, 5000);
       
       $.ajax({
              url:"/test",
              type:"POST",
              contentType: "application/json",
              data: JSON.stringify(s)});
       
})








