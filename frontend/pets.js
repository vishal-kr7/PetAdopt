const searchInput = document.getElementById('searchInput');
    const noResultMessage = document.getElementById('noResultMessage');
    const petCards = document.querySelectorAll('.pet-card');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Filter pets by text search
    function filterPetsBySearch() {
      const searchText = searchInput.value.toLowerCase();
      let found = false;
    
      petCards.forEach(card => {
        const cardText = card.innerText.toLowerCase();
        const petType = card.getAttribute('data-type');
    
        if (cardText.includes(searchText) || petType.includes(searchText)) {
          card.style.display = "block";
          found = true;
        }else {
          card.style.display = "none";
        }
      });
    
      noResultMessage.style.display = found ? "none" : "block";
    }
    
    // Filter pets by type (dog, cat, bird)
    function filterPetsByType(type) {
      let found = false;
    
      petCards.forEach(card => {
        const petType = card.getAttribute('data-type');
    
        if (type === 'all' || petType === type) {
          card.style.display = "block";
          found = true;
        } else {
          card.style.display = "none";
        }
      });
    
      noResultMessage.style.display = found ? "none" : "block";
    }
    
    // Event listener for search
    searchInput.addEventListener('input', filterPetsBySearch);
    
    // Event listeners for filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const type = button.getAttribute('data-filter');
        searchInput.value = ''; // Clear search when filter button clicked
        filterPetsByType(type);
      });
    });




    