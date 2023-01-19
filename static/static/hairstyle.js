let video = document.querySelector("#videoElement");
let canvas = document.getElementById('canvas');
canvas.style.display = "none";
let context = canvas.getContext('2d');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}



document.getElementById("snap").addEventListener("click", function() {
    console.log("button was clicked")
    video.style.display = "none";
    canvas.style.display = "block";
	context.drawImage(video, 0, 0, 1920, 1080);
    let mySt = "delete";
    const dict_values = {mySt}
    const s = JSON.stringify(dict_values);

    $.ajax({
        url:"/del",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});
    function download() {
        var dt = canvas.toDataURL(img);
        this.href = dt;
    };
    let downloadLnk = document.getElementById("downloadLnk");
    setTimeout(() => {
        downloadLnk.click();       
    }, 100);
    setTimeout(() => {
        window.location.reload()
    }, 3000);
    downloadLnk.addEventListener('click', download, false);
});


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
let img = document.getElementsByClassName("img");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

let modalImgReal = document.getElementById("modalImgReal");
let id;

for(let i = 0; i < img.length; i++)
{
    img[i].addEventListener("click", function(){
        modalImgReal.src = img[i].id;
        id = img[i].firstChild.id;
        toggleModal();
    });
}

let modalGo = document.getElementById("modalGo");
let blend = document.getElementById("blend");
let blendCheck = false;
let yourDiv = document.getElementById("yourDiv");
let load = document.getElementById("load");

blend.addEventListener( "change", () => {
    blendCheck = blend.checked;
 });

modalGo.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

modalGo.addEventListener("click", function(){
    context. clearRect(0, 0, canvas. width, canvas. height)
    //load.style.display = "block";
    const dict_values = {id, blendCheck}
    const s = JSON.stringify(dict_values);

    $.ajax({
        url:"/hair",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});
})






