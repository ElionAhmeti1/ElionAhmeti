const container = document.querySelector('.container');
const showFormButton = document.querySelector('.show-form-button');

showFormButton.addEventListener('click', () => {
  container.style.display = 'block';
});


const feedbackForm = document.getElementById('feedback-form');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');

feedbackForm.addEventListener('submit', function(e) {
  // Prevent form submission
  e.preventDefault();
  
  // Check if all required fields are filled in
  if (fullnameInput.value === '' || emailInput.value === '' || opinionsInput.value === '') {
    // Animate the submit button to move left and right
    submitBtn.classList.add('shake');
    
    // Remove the animation class after 500ms
    setTimeout(function() {
      submitBtn.classList.remove('shake');
    }, 500);
  } else {
    // Submit the form normally
    this.submit();
  }
});
