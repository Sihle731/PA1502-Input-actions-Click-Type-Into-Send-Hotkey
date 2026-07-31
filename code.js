
const button = document.getElementById('clickButton');
const input = document.getElementById('userInput');
const output = document.getElementById('outputText');

button.addEventListener("click", function () {
    output.textContent = "You entered: " + input.value;
});


setTimeout(function(){
    button.click();
}, 5000);
