
function Item(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}


function addItem(inventory, item) {
    inventory.push(item);
}


function updateItem(inventory, id, newDetails) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            inventory[i].name = newDetails.name || inventory[i].name;
            inventory[i].quantity = newDetails.quantity || inventory[i].quantity;
            inventory[i].price = newDetails.price || inventory[i].price;
            return;
        }
    }
    console.log("Item not found");
}


function deleteItem(inventory, id) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === id) {
            inventory.splice(i, 1);
            return;
        }
    }
    console.log("Item not found");
}



function getItem(inventory, id) {
    for (let item of inventory) {
        if (item.id === id) {
            return item;
        }
    }
    console.log("Item not found");
    return null;
}


function printInventory(inventory) {
    console.log("Inventory Details:");
    for (let item of inventory) {
        console.log( {item,id}, Name, {item,name}, Quantity, {item,quantity}, Price, {item,price});
    }
}

let inventory = [];

let item1 = new Item(1, "Apple", 50, 1.5);
let item2 = new Item(2, "Orange", 30, 2.0);

addItem(inventory, item1);
addItem(inventory, item2);

printInventory(inventory);

updateItem(inventory, 1, { quantity: 100, price: 1.75 });

printInventory(inventory);

deleteItem(inventory, 2);

printInventory(inventory);