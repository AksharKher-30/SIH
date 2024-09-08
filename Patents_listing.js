// Sample data for innovation listings
const innovations = [
    {
        title: "Vertical Axis Wind Turbine with Enhanced Blade Design",
        description: "A vertical axis wind turbine featuring blades with a novel curvature that increases energy capture efficiency by 20% over traditional designs.",
        fullDescription: "The turbine uses elliptical blade shapes that maximize air resistance, improving rotation speed even in low wind conditions. The design also includes a self-lubricating bearing system to reduce friction and increase the lifespan of the turbine.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/RE/001234"
    },
    {
        title: "Wearable Glucose Monitoring Patch",
        description: "A non-invasive glucose monitoring patch that adheres to the skin and continuously measures glucose levels through interstitial fluid.",
        fullDescription: "The patch contains micro-needles that penetrate the skin minimally, drawing interstitial fluid into a sensor chamber. The sensor uses a novel enzyme reaction to measure glucose levels, with results displayed on an accompanying mobile app.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/MD/002345"
    },
    {
        title: "Adaptive Headlight System for Autonomous Vehicles",
        description: "An adaptive headlight system designed for autonomous vehicles that adjusts beam patterns in real-time based on road conditions, weather, and surrounding traffic.",
        fullDescription: "The headlights are equipped with sensors that detect ambient light, precipitation, and the movement of surrounding vehicles. An AI algorithm processes this data to dynamically adjust the intensity and direction of the beams, improving safety in various driving conditions.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/AT/003456"
    },
    {
        title: "Self-Cleaning Smartphone Screen",
        description: "A smartphone screen coated with a hydrophobic and oleophobic material that repels water and oils, keeping the screen clean from fingerprints and smudges.",
        fullDescription: "The coating is activated by a built-in UV light that also disinfects the surface. Nanoparticles create a protective barrier against liquids and oils, ensuring a clean and germ-free screen.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/CE/004567"
    },
    {
        title: "Genetically Engineered Drought-Resistant Crop",
        description: "A genetically engineered crop that exhibits enhanced drought resistance through modified root architecture and water retention capabilities.",
        fullDescription: "Using CRISPR technology, the crop's genes related to root growth and water absorption are altered, resulting in deeper roots and more efficient water use, leading to improved yields in arid conditions.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/BT/005678"
    },
    {
        title: "Portable Air Purifier with Solar Charging",
        description: "A portable air purifier that uses solar panels for charging, featuring a multi-stage filtration system to remove particulate matter and odors.",
        fullDescription: "The air purifier is equipped with foldable solar panels that provide power for up to 10 hours of continuous operation. Its filtration system includes HEPA and activated carbon filters for optimal air quality.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/ET/006789"
    },
    {
        title: "Blockchain-Based Secure Voting System",
        description: "A secure voting system that leverages blockchain technology to ensure transparency, security, and immutability in the electoral process.",
        fullDescription: "Each vote is recorded as a transaction on the blockchain, making it impossible to alter. Voters can verify their votes through a secure app, and results are aggregated in real-time while maintaining anonymity.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/SW/007890"
    },
    {
        title: "Biodegradable Food Packaging from Agricultural Waste",
        description: "A biodegradable food packaging material made from agricultural waste such as rice husks and wheat straw, designed to replace single-use plastics.",
        fullDescription: "The packaging is created by processing agricultural waste into pulp, which is molded into different shapes. It decomposes naturally within 90 days, offering an eco-friendly alternative to plastics.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/FT/008901"
    },
    {
        title: "Self-Healing Concrete with Embedded Microcapsules",
        description: "A self-healing concrete that contains microcapsules filled with a healing agent that seals cracks, extending the lifespan of concrete structures.",
        fullDescription: "When cracks form, the microcapsules break open and release a liquid polymer that solidifies on contact with water, effectively repairing the crack and preventing further damage.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/CT/009012"
    },
    {
        title: "Autonomous Drone for Agricultural Monitoring",
        description: "An autonomous drone equipped with multi-spectral sensors and AI-based analytics for monitoring crop health and soil conditions.",
        fullDescription: "The drone follows pre-programmed flight paths and uses multi-spectral imaging to assess plant health, moisture levels, and soil quality. It provides farmers with actionable data via a mobile app.",
        startDate: "2024-01-01",
        endDate: "2024-12-31",
        userId: "2024/RB/010123"
    }
];

// Function to render the innovation listings
function renderListings(data) {
    const listingsContainer = document.getElementById('patents-listing');
    listingsContainer.innerHTML = '';

    data.forEach(item => {
        const listing = document.createElement('div');
        listing.className = 'patent-item';
        
        listing.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <p><strong>Start Date:</strong> ${item.startDate}</p>
            <p><strong>End Date:</strong> ${item.endDate}</p>
            <p><strong>Application ID:</strong> ${item.userId}</p>
            <div id="full-description-${item.userId}" class="full-description" style="display: none;">
                <p>${item.fullDescription}</p>
            </div>
            <div class="buttons">  
                <button class="buy-button">Buy</button>
                <button class="read-more-button" data-id="${item.userId}">Read More</button>
            </div>
        `;
        
        listingsContainer.appendChild(listing);
    });

    // Add event listeners to "Read More" buttons
    document.querySelectorAll('.read-more-button').forEach(button => {
        button.addEventListener('click', function() {
            const fullDescriptionDiv = document.getElementById(`full-description-${this.dataset.id}`);
            if (fullDescriptionDiv.style.display === 'none') {
                fullDescriptionDiv.style.display = 'block';
                this.textContent = "Read Less";
            } else {
                fullDescriptionDiv.style.display = 'none';
                this.textContent = "Read More";
            }
        });
    });
}

// Initial render of listings
renderListings(innovations);

// Search functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredData = innovations.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );
    renderListings(filteredData);
});

// Filter functionality
document.getElementById('filter-button').addEventListener('click', function() {
    const startDate = document.getElementById('filter-start-date').value;
    const endDate = document.getElementById('filter-end-date').value;
    const userId = document.getElementById('filter-user-id').value.toLowerCase();

    const filteredData = innovations.filter(item => {
        return (!startDate || item.startDate >= startDate) &&
               (!endDate || item.endDate <= endDate) &&
               (!userId || item.userId.toLowerCase().includes(userId));
    });

    renderListings(filteredData);
});
