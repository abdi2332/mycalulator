


let p = document.querySelectorAll("button");
p.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let display = document.getElementById("inner");
    display.innerHTML += e.target.innerHTML;
  })
);
function Add(){
    
}