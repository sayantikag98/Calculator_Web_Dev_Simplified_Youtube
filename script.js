let str="", flag = false, prevStr = "";

document.querySelectorAll(".but").forEach(ele=>ele.childNodes[1].disabled = true);
document.getElementById("ac-btn").childNodes[1].disabled = false;

document.querySelector(".ac").addEventListener("click", (event)=>{
    document.querySelector(".current-compute").textContent = event.target.dataset.ac;
    document.querySelectorAll(".but").forEach(ele => ele.childNodes[1].disabled = false);
});

document.querySelectorAll(".num").forEach(ele=>{
    ele.addEventListener("click",event=>{
        str+=event.target.dataset.num;
        document.querySelector(".current-compute").textContent = str;
        if((str[str.length - 2]=== "+")||(str[str.length - 2]=== "-")||(str[str.length - 2]=== "*")||(str[str.length - 2]=== "/")){
            prevStr = str.substr(0,str.length-1);
            document.querySelector(".previous-compute").textContent = prevStr;
            str = str.substr(-1);
            document.querySelector(".current-compute").textContent = str;   
        }
    });
});

document.querySelectorAll(".op").forEach(ele=>{
    ele.addEventListener("click",event=>{
        if(!flag){
            str+=event.target.dataset.val;
            flag = true;
            document.querySelector(".current-compute").textContent = str;
        }   
    });
});


    
