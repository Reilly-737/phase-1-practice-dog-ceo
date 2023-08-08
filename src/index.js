document.addEventListener("DOMContentLoaded", function() {
  console.log("%c HI", "color: firebrick");
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageUrls = data.message;

      imageUrls.forEach((imageUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;

        document.body.appendChild(imgElement);
      });
    });

  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
      const breedList = data.message;
      const ulElement = document.querySelector("#dog-breeds");
      for (const breed in breedList) {
        const liElement = document.createElement("li");
        liElement.textContent = breed;
        ulElement.appendChild(liElement);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    }); 

    const ulElement = document.querySelector("#dog-breeds");
     
    ulElement.addEventListener("click", function(event) {
        if (event.target.tagName == "LI") {
            event.target.style.color = "red"
        }
    });

    const ulElements = document.querySelector("#dog-breeds");
    const selectElement = document.querySelector("#breed-dropdown");

    let breedList; 
         fetch(breedUrl)
           .then((response) => response.json())
           .then((data) => {
             breedList = data.message;
             selectElement.addEventListener("change", function () {
               const selectedLetter = selectElement.value;

               ulElements.innerHTML = "";

               for (const breed in breedList) {
                 if (breed.startsWith(selectedLetter)) {
                   const liElement = document.createElement("li");
                   liElement.textContent = breed;
                   ulElements.appendChild(liElement);
                 }
               }
             });
           })
           .catch((error) => {
             console.error("Error fetching breed data:", error);
           });

});

