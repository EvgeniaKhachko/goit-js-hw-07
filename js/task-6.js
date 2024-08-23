function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

function destroyBoxes() {
    document.querySelector('div#boxes').innerHTML = '';
}

function createBoxes(amount) {
    destroyBoxes();
    const box = document.querySelector('div#boxes');
    let fragment = document.createDocumentFragment();
    let height = 30;
    let width = 30;
    
    for (let i=1; i<=amount; i++) {
        let div = document.createElement("div");
        div.style.cssText = 'height:' + height + 'px;width:' + width + 'px;background-color:' + getRandomHexColor() + ';';
        fragment.appendChild(div);
        height = height + 10;
        width = width + 10;
    }
    box.appendChild(fragment);
}



document.querySelector('button[data-create]').addEventListener("click", event => {
    const inputNumbers = document.querySelector('#controls input');
    const numbVal = inputNumbers.value;

    if(numbVal>=1 && numbVal<=100) {
        createBoxes(numbVal);
        inputNumbers.value = '';
    }
});

document.querySelector('button[data-destroy]').addEventListener("click", event => {
    destroyBoxes();
});