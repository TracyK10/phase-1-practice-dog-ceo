console.log("%c HI", "color: firebrick");

document.addEventListener("DOMContentLoaded", () => {
  // Challenge 1
  function displayImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then((response) => response.json()) // Parse the response as HSON
      .then((data) => {
        let imageContainer = document.querySelector("#dog-image-container");
        let img = document.createElement("img");
        data.message.forEach((imageUrl) => {
          img.src = imageUrl;
          img.alt = "A random dog breed";
          imageContainer.appendChild(img);
        });
      })
      .catch((error) => console.log(error));
  }
  displayImages();

  // Challenge 2 - displaying a list of dog breeds
  function displayDogBreeds() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        let breedsList = document.querySelector("#dog-breeds");
        const breeds = Object.keys(data.message);
        breeds.forEach((breed) => {
          let li = document.createElement("li");
          li.textContent = breed;
          breedsList.appendChild(li);
          // Challenge 3 - changing the color of a list element
          li.addEventListener("click", () => {
            li.style.color = "blue";
          });

          // Challenge 4 - filtering list from dropdown
          let dropdown = document.querySelector("#breed-dropdown");
          dropdown.addEventListener("change", () => {
            const letter = dropdown.value.toLowerCase();
            breedsList.innerHTML = "";
            const filteredList = breeds.filter((dogBreed) =>
              dogBreed.startsWith(letter)
            );
            filteredList.forEach((breed) => {
              let li = document.createElement("li");
              li.textContent = breed;
              breedsList.appendChild(li);
            });
          });
        });
      });
  }
  displayDogBreeds();
});
