document.addEventListener('DOMContentLoaded', function() {
    
    const dropdowns = document.querySelectorAll('.dropdown');
    
    
    dropdowns.forEach(dropdown => {
      const valueElement = dropdown.querySelector('.dropdown__value');
      const listElement = dropdown.querySelector('.dropdown__list');
      const items = dropdown.querySelectorAll('.dropdown__item');
      
      
      valueElement.addEventListener('click', function() {
        
        document.querySelectorAll('.dropdown__list_active').forEach(openList => {
          if (openList !== listElement) {
            openList.classList.remove('dropdown__list_active');
          }
        });
        
        
        listElement.classList.toggle('dropdown__list_active');
      });
      
      
      items.forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault(); 
          
          
          const newValue = this.querySelector('.dropdown__link').textContent.trim();
          valueElement.textContent = newValue;
          
          
          listElement.classList.remove('dropdown__list_active');
        });
      });
    });
    
    
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown__list_active').forEach(list => {
          list.classList.remove('dropdown__list_active');
        });
      }
    });
  });