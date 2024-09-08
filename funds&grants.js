document.getElementById('grantForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form validation (you can add more specific validation if needed)
    const form = event.target;
    if (form.checkValidity()) {
        // Display confirmation message
        document.getElementById('confirmationMessage').classList.remove('hidden');

        // Optionally, you can handle form data submission here (e.g., via an API call)
        // For demonstration, we'll just log the form data to the console
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);

        // Reset the form after successful submission
        form.reset();
    }
});
