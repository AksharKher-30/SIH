document.getElementById("ceaseDesistForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let recipient = document.getElementById("recipientName").value;
    let infringement = document.getElementById("infringementDesc").value;

    if (confirm(`Are you sure you want to generate the cease and desist letter for ${recipient} regarding ${infringement}?`)) {
        alert("Cease and Desist letter has been generated.");
        // Additional logic for handling form data can be added here
    } else {
        alert("Action canceled.");
    }
});
