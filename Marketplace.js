// Handle form submission and KPI calculation
document.getElementById('businessDataForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get form values
    const sales = parseFloat(document.getElementById('sales').value);
    const acquisition = parseFloat(document.getElementById('acquisition').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const investment = parseFloat(document.getElementById('investment').value);

    const prevSales = parseFloat(document.getElementById('prevSales').value);
    const prevAcquisition = parseFloat(document.getElementById('prevAcquisition').value);
    const prevExpenses = parseFloat(document.getElementById('prevExpenses').value);
    const prevInvestment = parseFloat(document.getElementById('prevInvestment').value);

    // Calculate KPIs
    const revenueGrowth = ((sales - expenses) / expenses * 100).toFixed(2);
    const burnRate = expenses;
    const cac = (expenses / acquisition).toFixed(2);
    const cltv = ((sales / acquisition) * 12).toFixed(2); // Assuming yearly value

    // Update KPI values
    document.getElementById('revenueGrowth').textContent = `${revenueGrowth}%`;
    document.getElementById('burnRate').textContent = `$${burnRate}`;
    document.getElementById('cac').textContent = `$${cac}`;
    document.getElementById('cltv').textContent = `$${cltv}`;

    // Update chart data
    updateChart([sales, acquisition, expenses, investment]);

    // Store values for predictive analysis
    window.previousData = {
        sales: prevSales,
        acquisition: prevAcquisition,
        expenses: prevExpenses,
        investment: prevInvestment
    };
});

// Chart.js - Data Visualization for Current Period
const ctx = document.getElementById('dataChart').getContext('2d');
let dataChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sales', 'Customer Acquisition', 'Expenses', 'Investments'],
        datasets: [{
            label: 'Business Data',
            data: [0, 0, 0, 0],
            backgroundColor: ['#1e88e5', '#43a047', '#e53935', '#ffb300'],
        }]
    }
});

// Function to update current data chart
function updateChart(data) {
    dataChart.data.datasets[0].data = data;
    dataChart.update();
}

// Predictive Analytics - Visualization and Calculations
document.getElementById('runAnalytics').addEventListener('click', function () {
    const currentSales = parseFloat(document.getElementById('sales').value);
    const currentAcquisition = parseFloat(document.getElementById('acquisition').value);
    const currentExpenses = parseFloat(document.getElementById('expenses').value);
    const currentInvestment = parseFloat(document.getElementById('investment').value);

    const prevSales = window.previousData.sales;
    const prevAcquisition = window.previousData.acquisition;
    const prevExpenses = window.previousData.expenses;
    const prevInvestment = window.previousData.investment;

    // Predict future values (simple trend calculation for illustration)
    const salesGrowth = ((currentSales - prevSales) / prevSales * 100).toFixed(2);
    const acquisitionGrowth = ((currentAcquisition - prevAcquisition) / prevAcquisition * 100).toFixed(2);
    const expenseGrowth = ((currentExpenses - prevExpenses) / prevExpenses * 100).toFixed(2);
    const investmentGrowth = ((currentInvestment - prevInvestment) / prevInvestment * 100).toFixed(2);

    const predictiveData = [
        { label: 'Sales Growth', value: salesGrowth },
        { label: 'Acquisition Growth', value: acquisitionGrowth },
        { label: 'Expense Growth', value: expenseGrowth },
        { label: 'Investment Growth', value: investmentGrowth }
    ]
    });