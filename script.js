let p = document.querySelectorAll(".number");
p.forEach((btn) =>
  btn.addEventListener("click", (e) => {
   let display = document.getElementById("screen");
    display.value += e.target.innerHTML;
    let parts = display.value.match(/[+\-*/]|\d+/g);
    calculate(parts)
  })
);

let answer=document.getElementById("result")


function calculate(parts){
    if(parts.length===3){
        let[num1,operand,num2]=parts
        num1=Number(num1)
        num2=Number(num2)
        switch(operand){
            case '+':
                answer.innerHTML=num1+num2
                break
            case '-':
                answer.innerHTML= num1-num2
                break
            case '*':
                answer.innerHTML= num1*num2
                break
            case '/':
                answer.innerHTML=num1/num2
                break
            default:
                answer.innerHTML="error"
        }
    }
    else {
        answer.innerHTML = "";
    }
    savedata()
    
    }
    function clean(){
    answer.innerHTML=""
    document.getElementById("screen").value=""
    }

    function savedata(){
      localStorage.setItem("data",answer.innerHTML)
  }


    window.addEventListener("load", function(){
      const saveData=localStorage.getItem("data")
      if(saveData){
        answer.innerHTML=saveData
      }
    })