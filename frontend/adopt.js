document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById('adoptionForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const pet = document.getElementById('petName').value.trim();
  const adopterName = document.getElementById('yourName').value.trim();
  const adopterEmail = document.getElementById('emailAddress').value.trim();
  const adopterPhone = document.getElementById('phoneNumber').value.trim();
  const adopterAddress = document.getElementById('address').value.trim();

  if (!pet) {
    alert('Please enter a pet name!');
    return;
  }

  const adoptionData = {
    pet: pet,
    adopterName: adopterName,
    adopterEmail: adopterEmail,
    message: `Phone: ${adopterPhone}, Address: ${adopterAddress}`
  };

  console.log('Submitting Adoption Request:', adoptionData); // Debug

  try {
    const response = await fetch('http://localhost:5000/api/adoptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(adoptionData),
    
    });

    if (response.ok) {
      alert('Adoption request submitted successfully!');
      window.location.href = 'thankyou.html'; // You can create a Thank You page later
    } else {
      alert('Failed to submit adoption request. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting adoption form:', error);
    alert('An error occurred. Please try again later.');
  }
});
});

