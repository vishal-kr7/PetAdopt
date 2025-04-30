document.addEventListener('DOMContentLoaded', () => {
  const petName = new URLSearchParams(window.location.search).get('pet');
  const petDetails = pets.find(pet => pet.id === petName); // Use .find() instead of petsData[petName.toLowerCase()]

  if (petDetails) {
    // Display Pet Details
    document.getElementById('petName').textContent = petDetails.name;
    document.getElementById('petAge').textContent = `Age: ${petDetails.age}`;
    document.getElementById('petBreed').textContent = `Breed: ${petDetails.breed}`;
    document.getElementById('petDescription').textContent = petDetails.description;
    document.getElementById('petImage').src = petDetails.image;

    // Dynamically add the buttons
    document.getElementById('adoptButtons').innerHTML = `
      <a href="adopt.html?pet=${petDetails.id}" class="btn btn-success mt-3">Adopt ${petDetails.name}</a>
      <a href="pets.html" class="btn btn-secondary mt-3 ms-2">← Back to Pets</a>
     `;
  } else {
    // If the pet is not found
    document.getElementById('petDetails').innerHTML = '<p>Pet not found!</p>';
  }
});
// const petDetailsContainer = document.getElementById('petDetailsContainer');
// const loadingSpinner = document.getElementById('loadingSpinner');

// // Get pet ID from URL
// const urlParams = new URLSearchParams(window.location.search);
// const petId = urlParams.get('pet');

// // simulate loading delay
// setTimeout(() => {
//   loadingSpinner.style.display = 'none';  // Hide spinner after loading

//   if (petId) {
//     fetch(`http://localhost:5000/api/pets/${petId}`)
//       .then(response => response.json())
//       .then(pet => {
//         if (pet) {
//           petDetailsContainer.innerHTML = 
//             <div class="row">
//               <div class="col-md-6">
//                 <img src="images/${pet.image}" alt="${pet.name}" class="img-fluid rounded"/>
//               </div>
//               <div class="col-md-6">
//                 <h2>${pet.name}</h2>
//                 <p><strong>Age:</strong> ${pet.age}</p>
//                 <p><strong>Breed:</strong> ${pet.breed}</p>
//                 <p>${pet.description}</p>
//                 <a href="adopt.html?pet=${pet._id}" class="btn btn-primary">Adopt ${pet.name}</a>
//                 <a href="pets.html" class="btn btn-secondary">← Back to Pets</a>
//               </div>
//             </div>
//           ;
//         } else {
//           petDetailsContainer.innerHTML = 
//             `<h2 class="text-center my-5">Pet not found.</h2>
//             <div class="text-center">
//               <a href="pets.html" class="btn btn-secondary">← Back to Pets</a>
//             </div>`
//           ;
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching pet:', error);
//         petDetailsContainer.innerHTML = 
//           `<h2 class="text-center my-5">Error loading pet details.</h2>
//           <div class="text-center">
//             <a href="pets.html" class="btn btn-secondary">← Back to Pets</a>
//           </div>`
//         ;
//       });
//   } else {
//     petDetailsContainer.innerHTML = 
//       `<h2 class="text-center my-5">Invalid Pet ID.</h2>
//       <div class="text-center">
//         <a href="pets.html" class="btn btn-secondary">← Back to Pets</a>
//       </div>`
//     ;
//   }
// }, 1000); // 1000ms = 1 second loading delay