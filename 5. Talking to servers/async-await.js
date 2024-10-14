const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

const gimmeDogButton = document.querySelector("#gimme-dog-button");
const dogsDiv = document.querySelector("#dogs");

async function gimmeDogAsync() {
    const response = await fetch(DOG_API_URL);
    const processedResponse = await response.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "dog";
    dogsDiv.appendChild(img);
}

document.querySelector("#gimme-dog-button").addEventListener("click", () => { gimmeDogAsync(); });
