// const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
// const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
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
//         // Add event listener for displaying details on click
//         plantCard.addEventListener('click', () => displayPlantDetails(plant));
//         container.appendChild(plantCard);
//     });
// }
//  function filterPlants(plants) {
//    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
//    const filteredPlants = plants.filter(plant =>
//         plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
//       );
//     }
//      displayPlants(filteredPlants.slice(0, 14));
// //     const itemsPerPage = 10;
// // const totalPages = Math.ceil(filteredPlants.length / itemsPerPage);
// // function displayPlants(currentPage, itemsPerPage) {
// //     const startIndex = currentPage * itemsPerPage;
// //     const endIndex = startIndex + itemsPerPage;
// //     const plantsToShow = filteredPlants.slice(startIndex, endIndex);
// // }
// // let currentPage = 0;

// // document.getElementById('prevBtn').addEventListener('click', () => {
// //     if (currentPage > 0) {
// //         currentPage--;
// //         displayPlants(currentPage, itemsPerPage);
// //     }
// // });

// // document.getElementById('nextBtn').addEventListener('click', () => {
// //     if (currentPage < totalPages - 1) {
// //         currentPage++;
// //         displayPlants(currentPage, itemsPerPage);
// //     }
// // });


// // }
// // function filterPlants(plants){
// //     const searchTerm=document.getElementById('searchBar').value.toLowerCase()
// //     const filteredPlants=plants.filter(plant=>
// //         plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
// //     );
// //     const itemsPerPage=20

// //     const totalPages=Math.ceil(filteredPlants.length/itemsPerPage)

// //     let currentPage = 1

// //     function fetchItemsForCurrentPage(){
// //         const startIndex=(currentPage-1)*itemsPerPage
// //         const endIndex = startIndex + itemsPerPage;
// //         const itemsForCurrentPage=filteredPlants.slice(startIndex,endIndex);
// //         return itemsForCurrentPage;

// //     }


// // function navigateToNextPage() {
// //     if (currentPage < totalPages) {
// //         currentPage++;
// //         displayPlants(fetchItemsForCurrentPage());
// //     }
// // }
// // function navigateToPreviousPage() {
// //     if (currentPage > 1) {
// //         currentPage--;
// //         displayPlants(fetchItemsForCurrentPage());
// //     }
// // }
// // function displayPlants(plants) {}
// // // displayPlants(fetchItemsForCurrentPage());
// // // navigateToNextPage();
// // // displayPlants(fetchItemsForCurrentPage());
// // }
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
// fetchPlants();
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
        const totalPages = 150;
        const plantsData = [];
        for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
            const response = await fetch(`${url}&page=${currentPage}`);
            const pageData = await response.json();
            plantsData.push(...pageData.data);
        }
        displayPlants(plantsData.slice(0, 40000));
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('input', () => filterPlants(plantsData));
    } catch (error) {
        console.log(error);
    }
}

// function displayPlants(plants) {
//     const container = document.querySelector('#container');
//     container.innerHTML = '';
//     plants.forEach((plant, index) => { // Use index to determine if the plant should be displayed
//         if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
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
//         }
//     });
// }
function displayPlants(plants) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear the container
    let startIndex = (currentPage - 1) * itemsPerPage; // Calculate start index for the current page
    let endIndex = Math.min(currentPage * itemsPerPage, plants.length); // Ensure we don't exceed the total number of plants

    for (let i = startIndex; i < endIndex; i++) { // Loop through the plants for the current page
        const plant = plants[i];
        const plantCard = document.createElement('div');
        plantCard.classList.add('plant-card');
        const nameElement = document.createElement('h3');
        nameElement.textContent = plant.common_name;
        plantCard.appendChild(nameElement);
        
        // Create and append the image element
        const imgElement = document.createElement('img');
        imgElement.src = plant.image_url || 'default-image-url'; // Provide a default image URL if plant.image_url is undefined
        imgElement.alt = plant.common_name;
        plantCard.appendChild(imgElement);
        
        // Add click event listener for plant details
        plantCard.addEventListener('click', () => displayPlantDetails(plant));
        container.appendChild(plantCard);}}

function filterPlants(plants) {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredPlants = plants.filter(plant =>
        plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
    );
    displayPlants(filteredPlants); // Pass the filtered array to displayPlants
}

// Function to update the current page and fetch new data
function nextPage() {
    currentPage++;
    fetchPlants();
}

// Function to go back to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        fetchPlants();
    }
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
        }
    });
}
fetchPlants();


//  Hambuger logic 
//     document.getElementById('menu-toggle').addEventListener('click', function() {
//     var navLinks = document.querySelector('.nav-links');
//     if (navLinks.style.display === 'block') {
//         navLinks.style.display = 'none';
//    } else {
//         navLinks.style.display = 'block';
//      }
//  });

