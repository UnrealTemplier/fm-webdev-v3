const button = document.querySelector(".event-button");
button.addEventListener("click", function() {
    alert("Button clicked!");
});


const input = document.querySelector(".event-input");
const paragraph = document.querySelector(".event-paragraph");
input.addEventListener("keyup", function() {
    paragraph.innerText = input.value;
});


const colorBox = document.querySelector(".color-box");
const colorInput = document.querySelector(".color-input");

colorInput.addEventListener("change", function () {
    colorBox.style.backgroundColor = colorInput.value;
});


const buttonContainer = document.querySelector(".button-container")
                                .addEventListener("click", function(event) {
                                    alert(`You cliked on button ${event.target.innerText}`);
                                });