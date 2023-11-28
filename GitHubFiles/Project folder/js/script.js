document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateForm() {
    // Prevent form submission by default
    // event.preventDefault(); // Remove this line, as it's not needed here

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

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


