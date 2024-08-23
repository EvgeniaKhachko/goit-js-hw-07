

const listOfLi= document.querySelectorAll("li.item");
console.log('Numbers of categories: ' + listOfLi.length);
listOfLi.forEach(liElement => {
    console.log('Category: ' + liElement.querySelector('h2').textContent);
    console.log('Elements: ' + liElement.querySelectorAll('li').length);
});


