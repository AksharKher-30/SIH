document.getElementById('funding-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const totalInvestment = document.getElementById('total-investment').value;
    const quarter1 = document.getElementById('quarter-1').value;
    const quarter2 = document.getElementById('quarter-2').value;
    const quarter3 = document.getElementById('quarter-3').value;
    const quarter4 = document.getElementById('quarter-4').value;
    const usedAmount = document.getElementById('used-amount').value;
    const utilizationDescription = document.getElementById('utilization-description').value;

    // Calculate total received
    const totalReceived = parseFloat(quarter1) + parseFloat(quarter2) + parseFloat(quarter3) + parseFloat(quarter4);

    // Display summary
    const summaryText = `
        Total Investment by Government: $${totalInvestment}
        Total Amount Received: $${totalReceived}
        Current Amount Used: $${usedAmount}
        Fund Utilization: ${utilizationDescription}
    `;

    document.getElementById('summary').textContent = summaryText;
    document.getElementById('result').style.display = 'block';
});