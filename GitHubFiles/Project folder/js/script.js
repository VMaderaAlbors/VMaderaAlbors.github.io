// Modify the validateForm function to return a boolean
function validateForm(event) {
    event.preventDefault(); // Prevent form submission by default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Validate the math question
    var userAnswer = parseInt(document.getElementById('answer').value, 10);
    if (userAnswer !== 4) {
        alert('Incorrect answer. Please try again.');
        return false;
    }

    if (name.trim() === '') {
        displayError('name-error', 'Name is required');
        return false;
    } else {
        hideError('name-error');
    }

    if (email.trim() === '') {
        displayError('email-error', 'Email is required');
        return false;
    } else if (!isValidEmail(email)) {
        displayError('email-error', 'Enter a valid email address');
        return false;
    } else {
        hideError('email-error');
    }

    if (name.trim() !== '' && isValidEmail(email)) {
        displaySuccess('success-message', 'Form submitted successfully!');
        return true;
    } else {
        hideSuccess('success-message');
        return false;
    }
}

// Inside the 'validateForm' function, pass the 'event' parameter

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    validateForm(event);
});


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


