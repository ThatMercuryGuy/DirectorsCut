

let searchBox = document.getElementById("searchBox");
let submit = document.getElementById("searchButton");
let imageContainer = document.getElementById("imageContainer")
let imageBox = document.getElementById("imageBox")
let userPrompt = "";
let intermediatesLeave = document.getElementById("intermediatesLeave");
let intermediatesBox = document.getElementById("intermediatesBox");
let demo = document.getElementById("demo");
let interpolation = document.getElementById("interpolation");
let ogImage1 = document.getElementById("ogImage1");
let finalImage1 = document.getElementById("finalImage1");
let slider1 = document.getElementById("myRange1");

let ogImage2 = document.getElementById("ogImage2");
let finalImage2 = document.getElementById("finalImage2");
let slider2 = document.getElementById("myRange2");

let ogImage3 = document.getElementById("ogImage3");
let finalImage3 = document.getElementById("finalImage3");
let slider3 = document.getElementById("myRange3");

function image1()
{
    console.log("Slider was moved");
    console.log(slider1.value);
    ogImage1.style.opacity = 100 - slider1.value/100
    finalImage1.style.opacity = slider1.value/100;
}

function image2()
{
    console.log("Slider was moved");
    console.log(slider2.value);
    ogImage2.style.opacity = 100 - slider2.value/100
    finalImage2.style.opacity = slider2.value/100;
}

function image3()
{
    console.log("Slider was moved");
    console.log(slider3.value);
    ogImage3.style.opacity = 100 - slider3.value/100
    finalImage3.style.opacity = slider3.value/100;
}
