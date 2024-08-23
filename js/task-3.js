const input = document.querySelector("input");
const output = document.querySelector("span#name-output");

input.addEventListener("input", (event) => {
    let inp = event.currentTarget.value;
    inp = inp.trim();

    if (inp == '') {
        inp = "Anonymous";
    }
    
    output.textContent = inp;
  });