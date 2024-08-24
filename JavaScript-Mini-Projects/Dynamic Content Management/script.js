// Get references to the DOM elements
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const addItemButton = document.getElementById('add-item');
const shoppingList = document.getElementById('shopping-list');

// Function to add a new item to the shopping list
function addItem() {
    const name = itemNameInput.value.trim();
    const quantity = itemQuantityInput.value.trim();

    // Validate inputs
    if (!name || !quantity || isNaN(quantity) || quantity <= 0) {
        alert('Please enter a valid item name and quantity.');
        return;
    }

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.className = 'shopping-list-item';

    // Create the content for the list item
    listItem.innerHTML = `
        <span>${name} (${quantity})</span>
        <div>
            <button onclick="editItem(this)">Edit</button>
            <button onclick="removeItem(this)">Remove</button>
        </div>
    `;

    // Add the new list item to the shopping list
    shoppingList.appendChild(listItem);

    // Clear the input fields
    itemNameInput.value = '';
    itemQuantityInput.value = '';
}

// Function to edit an existing item
function editItem(button) {
    // Get the list item element
    const listItem = button.parentElement.parentElement;

    // Extract current item details
    const currentText = listItem.querySelector('span').textContent;
    const [name, quantity] = currentText.split('(').map(part => part.trim().replace(/[()]/g, ''));

    // Prompt user for new item details
    const newName = prompt('Edit item name:', name);
    const newQuantity = prompt('Edit quantity:', quantity);

    // Validate inputs
    if (!newName || !newQuantity || isNaN(newQuantity) || newQuantity <= 0) {
        alert('Please enter valid item name and quantity.');
        return;
    }

    // Update the list item
    listItem.querySelector('span').textContent = `${newName} (${newQuantity})`;
}

// Function to remove an item from the list
function removeItem(button) {
    // Get the list item element and remove it
    const listItem = button.parentElement.parentElement;
    shoppingList.removeChild(listItem);
}

// Add event listener for the "Add Item" button
addItemButton.addEventListener('click', addItem);
