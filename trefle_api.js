// const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
// const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
// let currentPage = 1; // Start from the first page
// const itemsPerPage = 16; // Number of items per page

// async function fetchPlants() {
//     try {
//         const response = await fetch(`${url}&page=${currentPage}&limit=${itemsPerPage}`);
//         const plants = await response.json();
//         displayPlants(plants.data); // Pass the entire array to displayPlants
//         const searchBar = document.getElementById('searchBar');
//         searchBar.addEventListener('input', () => filterPlants(plants.data));
//     } catch (error) {
//         console.log(error);
//     }
// }
// function displayPlants(plants) {
//     const container = document.querySelector('#container');
//     container.innerHTML = ''; // Clear the container
//     let startIndex = (currentPage - 1) * itemsPerPage; // Calculate start index for the current page
//     let endIndex = Math.ceil(currentPage * itemsPerPage, plants.length); // Ensure we don't exceed the total number of plants

//     for (let i = startIndex; i < endIndex; i++) { // Loop through the plants for the current page
//         const plant = plants[i];
//         const plantCard = document.createElement('div');
//         plantCard.classList.add('plant-card');
//         const nameElement = document.createElement('h3');
//         nameElement.textContent = plant.common_name;
//         plantCard.appendChild(nameElement);

//         // Create and append the image element
//         const imgElement = document.createElement('img');
//         imgElement.src = plant.image_url || 'default-image-url'; // Provide a default image URL if plant.image_url is undefined
//         imgElement.alt = plant.common_name;
//         plantCard.appendChild(imgElement);

//         // Add click event listener for plant details
//         plantCard.addEventListener('click', () => displayPlantDetails(plant));
//         container.appendChild(plantCard);}}

// function filterPlants(plants) {
//     const searchTerm = document.getElementById('searchBar').value.toLowerCase();
//     const filteredPlants = plants.filter(plant =>
//         plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
//     );
//     displayPlants(filteredPlants); // Pass the filtered array to displayPlants
// }

// // Function to update the current page and fetch new data
// function nextPage() {
//     currentPage++;
//     fetchPlants();
// }

// // Function to go back to the previous page
// function prevPage() {
//     if (currentPage > 1) {
//         currentPage--;
//         fetchPlants();
//     }
// }
// function displayPlantDetails(plant) {
//         const modal = document.getElementById('modal');
//         const plantDetails = document.getElementById('plant-details');

//         plantDetails.innerHTML = `
//             <h2>${plant.common_name}</h2>
//             <img src="${plant.image_url}" alt="${plant.common_name}" style="width:100%;height:auto;border-radius:15px;">
//             <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
//             <p><strong>Family:</strong> ${plant.family_common_name}</p>
//             <p><strong>Genus:</strong> ${plant.genus}</p>
//             <p><strong>Year:</strong> ${plant.year}</p>
//             <p><strong>Bibliography:</strong> ${plant.bibliography}</p>
//         `;

//         modal.style.display = "block";
//         const closeButton = document.querySelector('.close-button');
//         closeButton.addEventListener('click', () => {
//             modal.style.display = "none";
//         });
//         window.addEventListener('click', (event) => {
//             if (event.target == modal) {
//                 modal.style.display = "none";
//             }
//         });
//     }

// // Example usage of nextPage and prevPage functions
// document.getElementById('nextPageButton').addEventListener('click', nextPage);
// document.getElementById('prevPageButton').addEventListener('click', prevPage);

// fetchPlants(); // Initial fetch
// const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
// const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
// let currentPage = 1;
// let plantsPerPage = 21;
// let totalPlants = 0;
// let filteredPlants = [];

// async function fetchPlants() {
//     try {
//         const response = await fetch(`${url}`);
//         const plants = await response.json();
//         totalPlants = plants.data.length;
//         displayPlants(plants.data.slice(0, plantsPerPage));
//         const searchBar = document.getElementById('searchBar');
//         searchBar.addEventListener('input', () => filterPlants(plants.data));
//     } catch (error) {
//         console.log(error);
//     }
// }

// function displayPlants(plants) {
//     const container = document.querySelector('#container');
//     container.innerHTML = '';
//     plants.forEach(plant => {
//         const plantCard = document.createElement('div');
//         plantCard.classList.add('plant-card');
//         const nameElement = document.createElement('h3');
//         nameElement.textContent = plant.common_name;
//         plantCard.appendChild(nameElement);
//         const imgElement = document.createElement('img');
//         imgElement.src = plant.image_url;
//         imgElement.alt = plant.common_name;
//         plantCard.appendChild(imgElement);
//         plantCard.addEventListener('click', () => displayPlantDetails(plant));
//         container.appendChild(plantCard);
//     });
// }

// function filterPlants(plants) {
//     const searchTerm = document.getElementById('searchBar').value.toLowerCase();
//     filteredPlants = plants.filter(plant =>
//         plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
//     );
//     displayPlants(filteredPlants.slice((currentPage - 1) * plantsPerPage, currentPage * plantsPerPage));
// }

// function displayPlantDetails(plant) {
//     const modal = document.getElementById('modal');
//     const plantDetails = document.getElementById('plant-details');

//     plantDetails.innerHTML = `
//         <h2>${plant.common_name}</h2>
//         <img src="${plant.image_url}" alt="${plant.common_name}" style="width:100%;height:auto;border-radius:15px;">
//         <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
//         <p><strong>Family:</strong> ${plant.family_common_name}</p>
//         <p><strong>Genus:</strong> ${plant.genus}</p>
//         <p><strong>Year:</strong> ${plant.year}</p>
//         <p><strong>Bibliography:</strong> ${plant.bibliography}</p>
//     `;

//     modal.style.display = "block";
//     const closeButton = document.querySelector('.close-button');
//     closeButton.addEventListener('click', () => {
//         modal.style.display = "none";
//     });
//     window.addEventListener('click', (event) => {if (event.target == modal) {
//         modal.style.display = "none";
//     }
// });
// }

// function handlePagination() {
// const paginationContainer = document.getElementById('pagination');
// const pages = Math.ceil(filteredPlants.length / plantsPerPage);
// for (let i = 1; i <= pages; i++) {
//     const pageLink = document.createElement('a');
//     pageLink.href = '#';
//     pageLink.textContent = i;
//     pageLink.addEventListener('click', () => {
//         currentPage = i;
//         displayPlants(filteredPlants.slice((currentPage - 1) * plantsPerPage, currentPage * plantsPerPage));
//     });
//     paginationContainer.appendChild(pageLink);}}
//     window.addEventListener("load",()=>{
//         handlePagination();
//     })
//     fetchPlants();

// const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
// const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
// let currentPage = 1;
// let currentSearchTerm = '';
// async function fetchPlants(page = 1, searchTerm = '') {
//     try {
//         const response = await fetch(`${url}&page=${page}&q=${encodeURIComponent(searchTerm)}`);
//         const plants = await response.json();
//         displayPlants(plants.data);
//         updatePagination(plants.links);
//         return plants;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }

// function displayPlants(plants) {
//     const container = document.querySelector('#container');
//     container.innerHTML = ''; // Clear previous results
//     if (plants.length === 0) {
//         const notFoundMessage = document.createElement('p');
//         notFoundMessage.textContent = 'No plants found.';
//         container.appendChild(notFoundMessage);
//     } else {
//         plants.forEach(plant => {
//             const plantCard = document.createElement('div');
//             plantCard.classList.add('plant-card');
//             const nameElement = document.createElement('h3');
//             nameElement.textContent = plant.common_name;
//             plantCard.appendChild(nameElement);
//             const imgElement = document.createElement('img');
//             imgElement.src = plant.image_url;
//             imgElement.alt = plant.common_name;
//             plantCard.appendChild(imgElement);
//             plantCard.addEventListener('click', () => displayPlantDetails(plant));
//             container.appendChild(plantCard);
//         });
//     }
// }

// function updatePagination(links) {
//     const prevPageButton = document.getElementById('prevPage');
//     const nextPageButton = document.getElementById('nextPage');
//     if (links.prev) {
//         prevPageButton.disabled = false;
//     } else {
//         prevPageButton.disabled = true;
//     }
//     if (links.next) {
//         nextPageButton.disabled = false;
//     } else {
//         nextPageButton.disabled = true;
//     }
// }
// function displayPlantDetails(plant) {
//     const modal = document.getElementById('modal');
//     const plantDetails = document.getElementById('plant-details');
//     plantDetails.innerHTML = `
//         <h2>${plant.common_name}</h2>
//         <img src="${plant.image_url}" alt="${plant.common_name}" style="width:100%;height:auto;border-radius:15px;">
//         <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
//         <p><strong>Family:</strong> ${plant.family_common_name}</p>
//         <p><strong>Genus:</strong> ${plant.genus}</p>
//         <p><strong>Year:</strong> ${plant.year}</p>
//         <p><strong>Bibliography:</strong> ${plant.bibliography}</p>
//     `;
//     modal.style.display = "block";
//     const closeButton = document.querySelector('.close-button');
//     closeButton.addEventListener('click', () => {
//         modal.style.display = "none";
//     });
//     window.addEventListener('click', (event) => {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     });
// }
// // let currentPage = 1;
// // let nextPageUrl = null;
// // async function fetchAndDisplayPlants() {
// //     nextPageUrl = await fetchPlants(currentPage);
// //     currentPage++;
// // }
// // fetchAndDisplayPlants();
// // window.addEventListener('scroll', () => {
// //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight && nextPageUrl) {
// //         fetchAndDisplayPlants();
// //     }
// // });
// function searchPlants() {
//     const searchTerm = document.getElementById('searchBar').value.toLowerCase();
//     currentSearchTerm = searchTerm;
//     currentPage = 1;
//     fetchPlants(currentPage, searchTerm);
// }
// const searchBar = document.getElementById('searchBar');
// searchBar.addEventListener('input', searchPlants);
// const prevPageButton = document.getElementById('prevPage');
// prevPageButton.addEventListener('click', () => {
//     currentPage--;
//     fetchPlants(currentPage, currentSearchTerm);
// });
// const nextPageButton = document.getElementById('nextPage');
// nextPageButton.addEventListener('click', () => {
//     currentPage++;
//     fetchPlants(currentPage, currentSearchTerm);
// });
// fetchPlants(currentPage);


// const baseUrl =
//   "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
// const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
// let currentPage = 1;
// let currentSearchTerm = "";
// let currentFilterValue = "";
// async function fetchPlants(page = 1, searchTerm = "", filterValue = "") {
//   try {
//     const response = await fetch(
//       `${url}&page=${page}&q=${encodeURIComponent(
//         searchTerm
//       )}&filter[${filterValue}]=${encodeURIComponent(searchTerm)}`,
//     );
//     const plants = await response.json();
//     displayPlants(plants.data, searchTerm);
//     updatePagination(plants.links);
//     return plants;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
// function displayPlants(plants, searchTerm = "") {
//   const container = document.querySelector("#container");
//   container.innerHTML = ""; // Clear previous results
//   if (
//     plants.length === 0 ||
//     (searchTerm &&
//       !plants.some((plant) =>
//         plant.common_name.toLowerCase().includes(searchTerm)
//       ))
//   ) {
//     const notFoundMessage = document.createElement("p");
//     notFoundMessage.textContent = "No plants found.";
//     container.appendChild(notFoundMessage);
//   } else {
//     plants.forEach((plant) => {
//       if (!searchTerm || plant.common_name.toLowerCase().includes(searchTerm)) {
//         const plantCard = document.createElement("div");
//         plantCard.classList.add("plant-card");
//         const nameElement = document.createElement("h3");
//         nameElement.textContent = plant.common_name;
//         plantCard.appendChild(nameElement);
//         const imgElement = document.createElement("img");
//         imgElement.src = plant.image_url;
//         imgElement.alt = plant.common_name;
//         plantCard.appendChild(imgElement);
//         plantCard.addEventListener("click", () => displayPlantDetails(plant));
//         container.appendChild(plantCard);
//       }
//     });
//   }
// }
// function updatePagination(links) {
//   const prevPageButton = document.getElementById("prevPage");
//   const nextPageButton = document.getElementById("nextPage");
//   if (links.prev) {
//     prevPageButton.disabled = false;
//   } else {
//     prevPageButton.disabled = true;
//   }
//   if (links.next) {
//     nextPageButton.disabled = false;
//   } else {
//     nextPageButton.disabled = true;
//   }
// }
// function displayPlantDetails(plant) {
//   const modal = document.getElementById("modal");
//   const plantDetails = document.getElementById("plant-details");
//   plantDetails.innerHTML = `
//                 <h2>${plant.common_name}</h2>
//                 <img src="${plant.image_url}" alt="${plant.common_name}" style="width:100%;height:auto;border-radius:15px;">
//                 <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
//                 <p><strong>Family:</strong> ${plant.family_common_name}</p>
//                 <p><strong>Genus:</strong> ${plant.genus}</p>
//                 <p><strong>Year:</strong> ${plant.year}</p>
//                 <p><strong>Bibliography:</strong> ${plant.bibliography}</p>
//             `;
//   modal.style.display = "block";
//   const closeButton = document.querySelector(".close-button");
//   closeButton.addEventListener("click", () => {
//     modal.style.display = "none";
//   });
//   window.addEventListener("click", (event) => {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   });
// }
// function searchPlants() {
//   const searchTerm = document.getElementById("searchBar").value.toLowerCase();
//   const filterSelect = document.getElementById("filterSelect");
//   const filterValue = filterSelect.value;
//   currentSearchTerm = searchTerm;
//   currentFilterValue = filterValue;
//   currentPage = 1;
//   fetchPlants(currentPage, searchTerm, filterValue);
// }
// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("input", searchPlants);
// const filterSelect = document.getElementById("filterSelect");
// filterSelect.addEventListener("change", searchPlants);
// const prevPageButton = document.getElementById("prevPage");
// prevPageButton.addEventListener("click", () => {
//   currentPage--;
//   fetchPlants(currentPage, currentSearchTerm, currentFilterValue);
// });
// const nextPageButton = document.getElementById("nextPage");
// nextPageButton.addEventListener("click", () => {
//   currentPage++;
//   fetchPlants(currentPage, currentSearchTerm, currentFilterValue);
// });
// fetchPlants(currentPage);
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
