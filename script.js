/* str stores the value of the second operand, 
flag has been used to check that only one operand is selected and
prevStr stores the value of the first operand
*/

let str, flag, prevStr;

/*
Initially all the buttons are disabled and only the AC button is enabled and 
as the AC button is clicked zero appears on the screen and all the other buttons are enabled 

*/

document.querySelectorAll(".but").forEach(ele=>ele.childNodes[1].disabled = true);
document.getElementById("ac-btn").childNodes[1].disabled = false;

document.querySelector(".ac").addEventListener("click", (event)=>{
    document.querySelector(".current-compute").textContent = event.target.dataset.ac;
    document.querySelectorAll(".but").forEach(ele => ele.childNodes[1].disabled = false);
    document.querySelector(".previous-compute").textContent = "";
    str = "";
    prevStr = "";
    flag = false;
});

/*

As any number is clicked it get stored up in the str in the current-compute class div and as 
any operator is clicked then the str value gets up in the previous-compute class div and 
it gets stored up in the prevStr and the new numbers which are clicked gets stored up in the 
str variable as the second operand.

*/

document.querySelectorAll(".num").forEach(ele=>{
    ele.addEventListener("click",event=>{
        if(event.target.dataset.num === "."){
            str+="0";
        }
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

/*
Event listener for clicking the opearator button
*/

document.querySelectorAll(".op").forEach(ele=>{
    ele.addEventListener("click",event=>{
        if(!flag){
            str+=event.target.dataset.val;
            flag = true;
            document.querySelector(".current-compute").textContent = str;
        }   
    });
});

/*

This event listener does all the actual calculation of the calculator.

*/

document.querySelector(".equal").addEventListener("click",()=>{
    document.querySelector(".previous-compute").textContent += str; 
    let ans = 0, op1, op2, operator = prevStr[prevStr.length - 1], operator1 = str[str.length - 1];
    if((prevStr.length === 0) && (operator1 !== "+") &&(operator1 !== "-") && (operator1 !== "*") &&(operator1 !== "/")){
        document.querySelector(".current-compute").textContent = str;
    }
    else{
        let op1Str = prevStr.substr(0,prevStr.length-1);
        if(op1Str[1]===".")
            op1 = parseFloat(op1Str);
        else 
            op1 = parseInt(op1Str);
        if(str[1]===".")
            op2 = parseFloat(str);
        else 
            op2 = parseInt(str);
        if(operator === "+"){
            ans = op1 + op2;
        }
        else if (operator === "-"){
            ans = op1 - op2;
        }
        else if (operator === "*"){
            ans = op1 * op2;
        }
        else if (operator === "/"){
            ans = op1/op2;
        }
        str = ans;
        flag = false;
        document.querySelector(".current-compute").textContent = ans;
    }
});

/*

This event handler is used to handle the clicking event of the delete key

*/

document.querySelector(".del").addEventListener("click",()=>{
    str = str.substr(0, str.length-1);
    flag = false;
    if(str.length === 0)
        document.querySelector(".current-compute").textContent = 0;
    else 
        document.querySelector(".current-compute").textContent = str;
});

document.querySelectorAll(".but").forEach(ele => {
    ele.childNodes[1].style.opacity = "60%";
});




    
