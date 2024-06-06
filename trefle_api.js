
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
const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
let currentPage = 1;
let plantsPerPage = 15;
let totalPlants = 0;
let filteredPlants = [];

async function fetchPlants() {
    try {
        const response = await fetch(`${url}`);
        const plants = await response.json();
        totalPlants = plants.data.length;
        displayPlants(plants.data.slice(0, plantsPerPage));
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('input', () => filterPlants(plants.data));
    } catch (error) {
        console.log(error);
    }
}

function displayPlants(plants) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; 
    plants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.classList.add('plant-card');
        const nameElement = document.createElement('h3');
        nameElement.textContent = plant.common_name;
        plantCard.appendChild(nameElement);
        const imgElement = document.createElement('img');
        imgElement.src = plant.image_url;
        imgElement.alt = plant.common_name;
        plantCard.appendChild(imgElement);
        plantCard.addEventListener('click', () => displayPlantDetails(plant));
        container.appendChild(plantCard);
    });
}

function filterPlants(plants) {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    filteredPlants = plants.filter(plant =>
        plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
    );
    displayPlants(filteredPlants.slice((currentPage - 1) * plantsPerPage, currentPage * plantsPerPage));
}

function displayPlantDetails(plant) {
    const modal = document.getElementById('modal');
    const plantDetails = document.getElementById('plant-details');

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
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });
    window.addEventListener('click', (event) => {if (event.target == modal) {
        modal.style.display = "none";
    }
});
}

function handlePagination() {
const paginationContainer = document.getElementById('pagination');
const pages = Math.ceil(filteredPlants.length / plantsPerPage);
for (let i = 1; i <= pages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => {
        currentPage = i;
        displayPlants(filteredPlants.slice((currentPage - 1) * plantsPerPage, currentPage * plantsPerPage));
    });
    paginationContainer.appendChild(pageLink);}}
    fetchPlants();

    

    