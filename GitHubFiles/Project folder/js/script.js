document.getElementById('contact-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function validateForm() {
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

    // Display the success message
    displaySuccess('success-message', 'Form submitted successfully!');

    // Return true to allow form submission
    return true;
}



document.getElementById("userForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting via HTTP

            // Get user input
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;

            // Hide the form
            document.getElementById("userForm").style.display = "none";

            // Show the thank you message
            var thankYouMessage = document.getElementById("thankYouMessage");
            thankYouMessage.innerText = name + ", thank you for your details. We will be in touch via " + email + " shortly.";
            document.getElementById("message").style.display = "block";
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


