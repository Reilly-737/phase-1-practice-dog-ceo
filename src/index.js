
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
      const ulElement = document.querySelector("ul.breed-list");
      for (const breed in breedList) {
        const liElement = document.createElement("li");
        liElement.textContent = breed;
        ulElement.appendChild(liElement);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    }); 

