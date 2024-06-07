// const container = document.getElementById('outcontainer')

// const baseurl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
// const encodedUrl = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);

// async function fetchResponse(){
//     try{
//         const response = await fetch(`${encodedUrl}`);
//         const result = response.json()
//         displayPlant(result.data.slice(0,100))

//     }
//     catch(error){
// console.log('No result found')
//     }
    
// }

// function displayPlant(result){
//     result.forEach(plant=>{
//         if(plant.common_name[0]=='D'){
//             const plantbox = document.createElement('div');
//             const plantName = document.createElement('h3');
//             plantName.textContent = plant.common_name;
//             plantbox.appendChild(plantName)
//             const plantimg = document.createElement('img');
//             plantimg.src = plant.img_url;
//             plantimg.alt = plant.common_name;
//             plantbox.appendChild(plantimg);

//             plantbox.addEventListener('click', () => displayPlant(result) ); 

//             container.appendChild(plantbox)
//         }
//     })
// }


const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
const encodedUrl = "https://corsproxy.io/?" + encodeURIComponent(baseUrl); 

async function fetchResponse() {
    try {
        const response = await fetch(`${encodedUrl}`);
        const result = await response.json(); 
        displayPlant(result.data.slice(0, 100));
    } catch (error) {
        console.log('No result found');
    }
}

function displayPlant(result) {
    const container = document.querySelector('#container');
    container.innerHTML = '';
    const plants = result.filter(plant => {
        if (plant.common_name[0] == 'm') { 
            const plantBox = document.createElement('div');
            const plantName = document.createElement('h3');
            plantName.textContent = plant.common_name;
            plantBox.appendChild(plantName);
            const plantImg = document.createElement('img');
            plantImg.src = plant.image_url;
            plantImg.alt = plant.common_name;
            plantBox.appendChild(plantImg);

            plantBox.addEventListener('click', () => alert(`Displaying ${plant.common_name} details...`));
            displayPlant(result)
            container.appendChild(plantBox);
        }
        return plants
    })
    
}

fetchResponse();
