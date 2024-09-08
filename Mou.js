document.getElementById('mouForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form Validation
    const form = e.target;
    let isValid = true;

    // Check for empty fields
    form.querySelectorAll('input, textarea').forEach(input => {
        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
            isValid = false;
        } else {
            input.style.border = '1px solid #ccc';
        }
    });

    if (isValid) {
        alert('MOU Submitted Successfully!');
        form.reset();
    } else {
        alert('Please fill in all the required fields.');
    }
});
