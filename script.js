// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded');
  
  // Get the modal
  var modal = document.getElementById('contact-modal');
  
  // Get the close button
  var closeBtn = document.querySelector('.close-modal');
  
  // Get the contact buttons
  var contactButton = document.querySelector('.contact-2');
  var workWithMeButtons = document.querySelectorAll('.background-3');
  
  // Add click event to contact button
  if (contactButton) {
    contactButton.style.cursor = 'pointer';
    contactButton.addEventListener('click', function() {
      console.log('Contact button clicked');
      modal.style.display = 'block';
    });
  }
  
  // Add click events to all work with me buttons
  if (workWithMeButtons.length > 0) {
    workWithMeButtons.forEach(function(button) {
      button.style.cursor = 'pointer';
      button.addEventListener('click', function() {
        console.log('Work with me button clicked');
        modal.style.display = 'block';
      });
    });
  }
  
  // Close modal when X is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Close modal when ESC is pressed
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
}); 