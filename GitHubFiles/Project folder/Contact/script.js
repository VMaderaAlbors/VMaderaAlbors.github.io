
// Contact Form validation
document.getElementById('math-form').addEventListener('submit', function(event) {
   
    var userAnswer = parseInt(document.getElementById('answer').value, 10);


    if (userAnswer !== 4) {
        
        alert('Incorrect answer. Please try again.');
       
        event.preventDefault();
    }
    
});


function validateForm() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '') {
        displayError('name-error', 'Name is required');
    } else {
        hideError('name-error');
    }

    if (email.trim() === '') {
        displayError('email-error', 'Email is required');
    } else if (!isValidEmail(email)) {
        displayError('email-error', 'Enter a valid email address');
    } else {
        hideError('email-error');
    }

    if (name.trim() !== '' && isValidEmail(email)) {
        displaySuccess('success-message', 'Form submitted successfully!');
    } else {
        hideSuccess('success-message');
    }
}

function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.display = 'none';
}

function displaySuccess(elementId, message) {
    const successElement = document.getElementById(elementId);
    successElement.textContent = message;
    successElement.style.display = 'block';
}

function hideSuccess(elementId) {
    const successElement = document.getElementById(elementId);
    successElement.style.display = 'none';
}

