// testing to see that the pages have attached correctly

console.log('hello world');

//to change the name of the name tag from the HTML

const name = document.getElementById('name');

const enterName = document.getElementById('enterName');

name.style.color = 'seagreen';

name.textContent = 'Cheese Eater';

function logOut() {
    console.log('Change the name!', Date.now());
    const enterName = document.getElementById('enterName');
    const currentInput = enterName.value;
    name.textContent = currentInput;
}

//to change the name of the name tag by the user

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', logOut);