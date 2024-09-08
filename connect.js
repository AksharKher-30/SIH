document.addEventListener('DOMContentLoaded', () => {
    const collaborationForm = document.getElementById('collaboration-form');
    const fundingForm = document.getElementById('funding-form');

    collaborationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your interest has been sent successfully!');
        collaborationForm.reset();
    });

    fundingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your investment!');
        fundingForm.reset();
    });
});
