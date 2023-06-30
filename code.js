const h1value = document.querySelector("h1")

console.log("test");
console.log(h1value.innerHTML);
h1value.innerHTML += " THis value was added in the DOM";

const myButton = document.querySelector(".btn");

const username = document.querySelector(".username");
const message = document.querySelector(".message");
const total = document.querySelector(".total");
const incrementBtn = document.querySelector(".increment");
const decrementBtn = document.querySelector(".decrement");


//alert.myButton

myButton.addEventListener('click', function() {
    if (username.value =='') {
        alert("Enter a name");
    }
    else {
        alert("Hello, " + username.value);
        message.innerText = "Hello, " + username.value;
        username.value = '';
    }
    
});
//vanilla javascript

incrementBtn.addEventListener('click', function() {
    total.innerText++;

});

decrementBtn.addEventListener('click', function() {
    if (total.innerText > 0) {
         total.innerText--;

    }
   
});