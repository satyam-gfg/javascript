
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

let inventory = [];

function addItem(inventory, item) {
    if (inventory.some(existingItem => existingItem.id === item.id)) {
        console.log(`Item with ID ${item.id} already exists.`);
        return;
    }
    inventory.push(item);
    console.log('Adding item:');
    printInventory(inventory);
}

function updateItem(inventory, id, newDetails) {
    const index = inventory.findIndex(item => item.id === id);

    if (index === -1) {
        console.log(`Item with ID ${id} not found.`);
        return;
    }

    Object.assign(inventory[index], newDetails);
    console.log('Updating item:');
    printInventory(inventory);
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);

    if (index === -1) {
        console.log(`Item with ID ${id} not found.`);
        return;
    }

    inventory.splice(index, 1);
    console.log(`Deleting item with ID ${id}:`);
    printInventory(inventory);
}

// Function to get an item by ID
function getItem(inventory, id) {
    const item = inventory.find(item => item.id === id);
    if (!item) {
        console.log(`Item with ID ${id} not found.`);
    }
    return item;
}

// Function to print the inventory
function printInventory(inventory) {
    console.log('[ ' + inventory.map(item => `{ id: ${item.id}, name: '${item.name}', quantity: ${item.quantity}, price: ${item.price} }`).join(', ') + ' ]');
}

// Example usage:

// Create some items
const item1 = new Item(1, 'Apple', 10, 0.5);
const item2 = new Item(2, 'Banana', 20, 0.2);
const item3 = new Item(3, 'Orange', 15, 0.7);

// Add items to inventory
addItem(inventory, item1);
addItem(inventory, item2);

// Update an item
updateItem(inventory, 2, { quantity: 30 });

// Delete an item
deleteItem(inventory, 1);

// Get an item
const item = getItem(inventory, 2);
console.log('Retrieved item:', item);

// Display current inventory
console.log('Final Inventory:');
printInventory(inventory);
