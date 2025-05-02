document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const loginEmail = document.getElementById('loginEmail').value.trim();
      const loginPassword = document.getElementById('loginPassword').value.trim();
  
      if (!loginEmail || !loginPassword) {
        alert('Please fill in all fields!');
        return;
      }
  
      const loginData = {
        email: loginEmail,
        password: loginPassword
      };
  
      try {
        const response = await fetch('https://pet-adopt-uz4v.onrender.com/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        });
  
        if (response.ok) {
          alert('Login successful!');
          window.location.href = '.../index.html';  // Redirect to  homepage
        } else {
          alert('Invalid credentials. Please try again.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again later.');
      }
    });
  });
