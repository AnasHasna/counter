const decrease=document.getElementById('decrease');
const increase=document.getElementById('increase');
const reseat=document.getElementById('reseat');
let elt=document.getElementById('count');
let anas=0;
update();

increase.addEventListener("click",()=>{
    anas++;
    update();
}) ;

decrease.addEventListener("click",()=>{
    anas--;
    update();
}) ;

reseat.addEventListener("click",()=>{
    anas=0;
    update();
}) ;


function update(){
    elt.innerHTML=anas;
    if (anas<'0'){
        elt.style.color="red";
    }
    else if (anas>='0'){
        elt.style.color="black";
    }
}