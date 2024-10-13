const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

const gimmeDogButton = document.querySelector("#gimme-dog-button");
const dogsDiv = document.querySelector("#dogs");

function gimmeDog() {
    const promise = fetch(DOG_API_URL);
    promise
        .then((response) => {
            const processingPromise = response.text();
            return processingPromise;
        })
        .then((processedResponse) => {
            const dogObject = JSON.parse(processedResponse);
            const img = document.createElement("img");
            img.src = dogObject.message;
            img.alt = "dog";
            dogsDiv.appendChild(img);
        })
}

document.querySelector("#gimme-dog-button").addEventListener("click", () => { gimmeDog(); });
