let countNumber = document.getElementById("countNumber")
let minusBtn = document.getElementById("minusBtn")
let plusBtn = document.getElementById("plusBtn")



plusBtn.addEventListener("click", ()=>{
    let count = countNumber.innerHTML;
    if(count < 10){
        countNumber.innerHTML++;
    }

})
minusBtn.addEventListener("click", ()=>{
    let count = countNumber.innerHTML;
    if(count > -2){
        countNumber.innerHTML--;
    }

})