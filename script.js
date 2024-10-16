document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (name === "" || email === "" || message === "") {
        alert('All fields are required!');
        return;
    }

    // Simulating a form submission (no backend)
    document.getElementById('form-feedback').innerText = "Message sent successfully! (Simulated)";
    
    // Clear form fields
    document.getElementById('contact-form').reset();
});


