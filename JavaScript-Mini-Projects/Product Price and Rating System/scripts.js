// Array to store product data
const products = [];

// Event listener for the "Add Product" button
document.getElementById('add-product').addEventListener('click', () => {
    // Retrieve values from input fields
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);

    // Check if all inputs are valid
    if (name && !isNaN(price) && !isNaN(rating)) {
        // Add new product to the array
        products.push({ name, price, rating });
        // Update the graphs to reflect new data
        updateGraphs();
    } else {
        // Alert if input data is invalid
        alert('Please enter valid data.');
    }
});

// Event listener for the "Sort by Price" button
document.getElementById('sort-price').addEventListener('click', () => {
    // Sort products array by price
    products.sort((a, b) => a.price - b.price);
    // Update the graphs to reflect sorted data
    updateGraphs();
});

// Event listener for the "Sort by Rating" button
document.getElementById('sort-rating').addEventListener('click', () => {
    // Sort products array by rating
    products.sort((a, b) => a.rating - b.rating);
    // Update the graphs to reflect sorted data
    updateGraphs();
});

// Function to update both price and rating graphs
function updateGraphs() {
    updateGraph('price-graph', 'price');
    updateGraph('rating-graph', 'rating');
}

// Function to update a specific graph (price or rating)
function updateGraph(elementId, type) {
    // Get the graph container element
    const graphElement = document.getElementById(elementId);
    // Clear any existing bars from the graph
    graphElement.innerHTML = '';

    // Find the maximum value for scaling the bars
    const max = Math.max(...products.map(p => p[type]));
    
    // Create a bar for each product
    products.forEach(product => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        // Set the height of the bar based on the product value
        bar.style.height = `${(product[type] / max) * 100}px`;
        bar.style.backgroundColor = 'blue';
        bar.textContent = product[type];
        // Add the bar to the graph container
        graphElement.appendChild(bar);
    });
}
