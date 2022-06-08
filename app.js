let container = document.querySelector(".container");
let result = document.querySelector(".result");
let operation = document.getElementById("operation");

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  myFunction();
});

container.addEventListener("click", (e) => {
  //    console.log(e.target);
  if (e.target.classList.contains("AC")) {
    result.innerHTML = "";
    operation.innerHTML = "";
  }
  //    if(e.target.classList.contains("plus")){
  //      console.log("plus");
  //    }


  // if (!(e.target.innerText == "=" || e.target.innerText == "AC")) {
  //   operation.textContent += e.target.textContent;
  // }
  if(e.target.className == "but run"){
  operation.textContent += e.target.textContent;

}


  if (
    e.target.innerText == "+" ||
    e.target.innerText == "-" ||
    e.target.innerText == "*" ||
    e.target.innerText == "/"  
  ) {
    result.textContent += operation.textContent;
    operation.textContent = "";
  }
});

function myFunction() {
  result.textContent += operation.textContent;
  operation.innerText = eval(result.innerText);
      // operation.textContent = "";
  // console.log(x);
  // document.querySelector(".result").innerText=x;
}
