// Variables to track form progress
let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
const progressBarFill = document.getElementById('progress-bar-fill');

// Move to the next step
function nextStep() {
    if (currentStep < formSteps.length - 1) {
        formSteps[currentStep].classList.remove('active');
        currentStep++;
        formSteps[currentStep].classList.add('active');
        updateProgressBar();
    }
}

// Move to the previous step
function prevStep() {
    if (currentStep > 0) {
        formSteps[currentStep].classList.remove('active');
        currentStep--;
        formSteps[currentStep].classList.add('active');
        updateProgressBar();
    }
}

// Update the progress bar
function updateProgressBar() {
    const progress = ((currentStep + 1) / formSteps.length) * 100;
    progressBarFill.style.width = progress + '%';
}

// Submit form
document.getElementById('startupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
