const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

const gimmeDogButton = document.querySelector("#gimme-dog-button");
const dogsDiv = document.querySelector("#dogs");

function gimmeDog() {
    const promise = fetch(DOG_API_URL);
    promise
        .then((response) => {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then((processedResponse) => {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "dog";
            dogsDiv.appendChild(img);
        })
}

document.querySelector("#gimme-dog-button").addEventListener("click", () => { gimmeDog(); });
