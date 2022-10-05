const inputEl =document.querySelector(".input");

const bodyEL =document.querySelector("body");
inputEl.checked =JSON.parse(localStorage.getItem("mode"));
updatebody();
function updatebody(){
    if(inputEl.checked){
            bodyEL.style.background="black"
    }
    else{
            bodyEL.style.background="white"
    }
}

inputEl.addEventListener(("input"),()=>{
    updateLocalstorage();
    updatebody()
})

function updateLocalstorage(){
    localStorage.setItem("mode",JSON.stringify(inputEl.checked));
}

