// Item class
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Add Item function
function addItem(inventory, item) {
    inventory.push(item);
}

// Update Item function
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    }
}

// Delete Item function
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
}

// Get Item function
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Print Inventory function
function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
}

// Example usage:
let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2)
];

console.log("Initial Inventory:");
printInventory(inventory);

console.log("\nAdding item:");
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
printInventory(inventory);

console.log("\nUpdating item:");
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

console.log("\nDeleting item:");
deleteItem(inventory, 2);
printInventory(inventory);