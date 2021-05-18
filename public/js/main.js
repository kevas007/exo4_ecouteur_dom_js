let exo1 = document.getElementsByTagName("input")[0];

exo1.addEventListener("focus",()=>{
    exo1.setAttribute("style","background-color: blue");
    console.log(exo1);
})


let exo2 = document.getElementsByTagName("input")[1];
exo2.addEventListener("focusin",(event)=>{
    event.target.style.background = 'blue';
    console.log(exo2);
})

exo2.addEventListener("focusout",(event)=>{
    event.target.style.background = '';
    console.log(exo2);
});


let exo3 = document.getElementsByClassName("buttonExo")[0];

let p1 = document.getElementsByClassName("premierParagraphe")[0];

let p2 = document.getElementsByClassName("secondParagraphe")[0];

let p3 = document.getElementsByClassName("dernierParagraphe")[0];

exo3.addEventListener("click",()=>{

    p1.innerText = p2.innerText;
    
    p3.innerText =p2.innerText;
})


let exo4 = document.getElementById("exo4")

let inp = document.getElementsByClassName("input-sm")[0]

let btn = document.getElementsByClassName("buttonExo")[1]

btn.addEventListener("click",()=>{
exo4.innerText = inp.value;

})


let exo5 = document.getElementsByClassName("mb-2")[0];
let p = document.querySelectorAll("p")[4]
let image = document.querySelectorAll("img")[0]

exo5.addEventListener("click",()=>{
image.setAttribute("src" ,"./src/image/tartine.png")

})


let exo6 = document.querySelectorAll('img')[1]

let exo6_1 = document.querySelectorAll('img')[2]

let source
exo6.addEventListener("click",()=>{
    source=exo6.src
})

exo6_1.addEventListener('click',()=>{

exo6_1.setAttribute('src',source)

})


let exo7 = document.querySelectorAll("p")[5];

let exo7_1 = document.querySelectorAll("p")[6];

let interface
let boutton = document.getElementsByClassName("mb-2")[1]

boutton.addEventListener("click",()=>{
    interface = exo7_1.innerText
    exo7_1.innerText = exo7.innerText
    exo7.innerText =interface
})