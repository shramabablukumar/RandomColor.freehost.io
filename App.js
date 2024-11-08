let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let h1 = document.querySelector("h1");
    let random = getRandomColor();
    h1.innerText = random;
    let div = document.querySelector("div");
    div.style.backgroundColor = random;
   
    console.log("color is update");
    

});

function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let Blue = Math.floor(Math.random()*255);

    let color = `rgb(${red} ,${green},${Blue})`;
    return color;
}