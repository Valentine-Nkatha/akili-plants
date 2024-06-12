const baseUrl =
        "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
      const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
      let currentPage = 1;
      let currentSearchTerm = "";
      let currentFilterValue = "";
      async function fetchPlants(page = 1, searchTerm = "", filterValue = "") {
        try {
          const response = await fetch(
            `${url}&page=${page}&q=${encodeURIComponent(searchTerm)}&filter[${filterValue}]=${encodeURIComponent(searchTerm)}`,
          );
          const plants = await response.json();
          displayPlants(plants.data, searchTerm);
          updatePagination(plants.links);
          return plants;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
      function displayPlants(plants, searchTerm = "") {
        const container = document.querySelector("#container");
        container.innerHTML = ""; // Clear previous results
        if (
          plants.length === 0 ||
          (searchTerm &&
            !plants.some((plant) =>
              plant.common_name.toLowerCase().includes(searchTerm),
            ))
        ) {
          const notFoundMessage = document.createElement("p");
          notFoundMessage.textContent = "No plants found.";
          container.appendChild(notFoundMessage);
        } else {
          plants.forEach((plant) => {
            if (
              !searchTerm ||
              plant.common_name.toLowerCase().includes(searchTerm)
            ) {
              const plantCard = document.createElement("div");
              plantCard.classList.add("plant-card");
              const nameElement = document.createElement("h3");
              nameElement.textContent = plant.common_name;
              plantCard.appendChild(nameElement);
              const imgElement = document.createElement("img");
              imgElement.src = plant.image_url;
              imgElement.alt = plant.common_name;
              plantCard.appendChild(imgElement);
              plantCard.addEventListener("click", () =>
                displayPlantDetails(plant),
              );
              container.appendChild(plantCard);
            }
          });
        }
      }
      function updatePagination(links) {
        const prevPageButton = document.getElementById("prevPage");
        const nextPageButton = document.getElementById("nextPage");
        if (links.prev) {
          prevPageButton.disabled = false;
        } else {
          prevPageButton.disabled = true;
        }
        if (links.next) {
          nextPageButton.disabled = false;
        } else {
          nextPageButton.disabled = true;
        }
      }
      function displayPlantDetails(plant) {
        const modal = document.getElementById("modal");
        const plantDetails = document.getElementById("plant-details");
        plantDetails.innerHTML = `
                <h2>${plant.common_name}</h2>
                <img src="${plant.image_url}" alt="${plant.common_name}" style="width:100%;height:auto;border-radius:15px;">
                <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
                <p><strong>Family:</strong> ${plant.family_common_name}</p>
                <p><strong>Genus:</strong> ${plant.genus}</p>
                <p><strong>Year:</strong> ${plant.year}</p>
                <p><strong>Bibliography:</strong> ${plant.bibliography}</p>
            `;
        modal.style.display = "block";
        const closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
          modal.style.display = "none";
        });
        window.addEventListener("click", (event) => {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        });
      }
      function searchPlants() {
        const searchTerm = document
          .getElementById("searchBar")
          .value.toLowerCase();
        const filterSelect = document.getElementById("filterSelect");
        const filterValue = filterSelect.value;
        currentSearchTerm = searchTerm;
        currentFilterValue = filterValue;
        currentPage = 1;
        fetchPlants(currentPage, searchTerm, filterValue);
      }
      const searchBar = document.getElementById("searchBar");
      searchBar.addEventListener("input", searchPlants);
      const filterSelect = document.getElementById("filterSelect");
      filterSelect.addEventListener("change", searchPlants);
      const prevPageButton = document.getElementById("prevPage");
      prevPageButton.addEventListener("click", () => {
        currentPage--;
        fetchPlants(currentPage, currentSearchTerm, currentFilterValue);
      });
      const nextPageButton = document.getElementById("nextPage");
      nextPageButton.addEventListener("click", () => {
        currentPage++;
        fetchPlants(currentPage, currentSearchTerm, currentFilterValue);
      });
      fetchPlants(currentPage);



