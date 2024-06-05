const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
// async function fetchPlants() {
//     try {
//         const response = await fetch(`${url}`);
//         const plants = await response.json();
//         displayPlants(plants.data.slice(0, 14)); 
//         const searchBar = document.getElementById('searchBar');
//         searchBar.addEventListener('input', () => filterPlants(plants.data));
//     } catch (error) {
//         console.log(error);
//     }
// }


 async function fetchPlants() {
        try {
            // Assuming the API provides a way to determine the total number of pages
            // For demonstration purposes, we'll assume a fixed number of pages
            const totalPages = 150; // Replace this with actual logic to determine total pages
            const plantsData = [];
            for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
                const response = await fetch(`${url}&page=${currentPage}`);
                const pageData = await response.json();
                plantsData.push(...pageData.data); // Concatenate data from each page
            }
            // Now, plantsData contains all plants from all pages
            displayPlants(plantsData.slice(0, 40000)); // Adjust the slice count as needed
            const searchBar = document.getElementById('searchBar');
            searchBar.addEventListener('input', () => filterPlants(plantsData));
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
        // Add event listener for displaying details on click
        plantCard.addEventListener('click', () => displayPlantDetails(plant));
        container.appendChild(plantCard);
    });
}
function filterPlants(plants) {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredPlants = plants.filter(plant =>
        plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
    );
    displayPlants(filteredPlants.slice(0, 14));
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
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
fetchPlants();


// const totalPages = Math.ceil(plants.length / plantsPerPage);


// // Function to display plants for a specific page
// function displayPage(page) {
//     const startIndex = (page - 1) * plantsPerPage;
//     const endIndex = startIndex + plantsPerPage;
//     plants.forEach((plant, index) => {
//         if (index >= startIndex && index < endIndex) {
//             plantCard.style.display = 'block';
//         } else {
//             plantCard.style.display = 'none';
//         }
//     });
// }

// // Function to update pagination buttons and page numbers
// function updatePagination() {
//     const pageNumbers = document.getElementById("pagination-numbers");
//     pageNumbers.innerHTML = '';
//     for (let i = 1; i <= totalPages; i++) {
//         const pageNumber = document.createElement("button");
//         pageNumber.className = "pagination-number";
//         pageNumber.innerHTML = i;
//         pageNumber.setAttribute("page-index", i);
//         pageNumber.setAttribute("aria-label", "Page " + i);
//         pageNumbers.appendChild(pageNumber);
//     }
// }


// // Event listener for "Previous" button
// prevButton.addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         displayPage(currentPage);
//         updatePagination();
//     }
// });

// // Event listener for "Next" button
// nextButton.addEventListener('click', () => {
//     if (currentPage < totalPages) {
//         currentPage++;
//         displayPage(currentPage);
//         updatePagination();
//     }
// });

// // Initialize pagination
// const currentPage = 1;
// updatePagination();





