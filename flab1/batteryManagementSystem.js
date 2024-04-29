// class BatteryManagementSystem {
//     constructor() {}
//     addBattery(): void {
//         const batteryIdInput: HTMLInputElement | null = document.getElementById("batteryId") as HTMLInputElement | null;
//         const batteryNameInput: HTMLInputElement | null = document.getElementById("batteryName") as HTMLInputElement | null;
//         const batteryPriceInput: HTMLInputElement | null = document.getElementById("batteryPrice") as HTMLInputElement | null;
//         const batteryStockInput: HTMLInputElement | null = document.getElementById("batteryStock") as HTMLInputElement | null;
//         if (batteryIdInput && batteryNameInput && batteryPriceInput && batteryStockInput) {
//             const batteryId: string = batteryIdInput.value;
//             const batteryName: string = batteryNameInput.value;
//             const batteryPrice: number = parseFloat(batteryPriceInput.value);
//             const batteryStock: number = parseInt(batteryStockInput.value);
//             const batteryList: HTMLTableElement | null = document.getElementById("batteryList") as HTMLTableElement | null;
//             if (batteryList) {
//                 const row: HTMLTableRowElement = batteryList.insertRow();
//                 row.insertCell(0).innerText = batteryId;
//                 row.insertCell(1).innerText = batteryName;
//                 row.insertCell(2).innerText = batteryPrice.toString();
//                 row.insertCell(3).innerText = batteryStock.toString();
//             }
//             const addBatteryForm: HTMLFormElement | null = document.getElementById("addBatteryForm") as HTMLFormElement | null;
//             if (addBatteryForm) {
//                 addBatteryForm.reset();
//             }
//         }
//     }
//     updateStock(): void {
//         const batteryIdInput: HTMLInputElement | null = document.getElementById("updateBatteryId") as HTMLInputElement | null;
//         const quantityInput: HTMLInputElement | null = document.getElementById("updateQuantity") as HTMLInputElement | null;
//         if (batteryIdInput && quantityInput) {
//             const batteryId: string = batteryIdInput.value;
//             const quantity: number = parseInt(quantityInput.value);
//             const batteryList: HTMLTableElement | null = document.getElementById("batteryList") as HTMLTableElement | null;
//             if (batteryList) {
//                 for (let i = 1; i < batteryList.rows.length; i++) {
//                     if (batteryList.rows[i].cells[0].innerText === batteryId) {
//                         const stockCell: HTMLTableCellElement | null = batteryList.rows[i].cells[3];
//                         if (stockCell) {
//                             const currentStock: number = parseInt(stockCell.innerText);
//                             stockCell.innerText = (currentStock + quantity).toString();
//                         }
//                         break;
//                     }
//                 }
//             }
//             const updateStockForm: HTMLFormElement | null = document.getElementById("updateStockForm") as HTMLFormElement | null;
//             if (updateStockForm) {
//                 updateStockForm.reset();
//             }
//         }
//     }
//     addOrderItem(): void {
//         const batteryId: string | null = prompt("Enter Battery ID:");
//         const quantity: number | null = parseInt(prompt("Enter Quantity:") || '0');
//         if (batteryId !== null && quantity !== null) {
//             const orderTable: HTMLTableElement | null = document.getElementById("orderItems") as HTMLTableElement | null;
//             if (orderTable) {
//                 const row: HTMLTableRowElement = orderTable.insertRow();
//                 row.insertCell(0).innerText = batteryId;
//                 row.insertCell(1).innerText = quantity.toString();
//             }
//         }
//     }
//     placeOrder(): void {
//         const orderTable: HTMLTableElement | null = document.getElementById("orderItems") as HTMLTableElement | null;
//         if (orderTable) {
//             const orderItems: { batteryId: string, quantity: number }[] = [];
//             let totalPrice: number = 0;
//             for (let i = 1; i < orderTable.rows.length; i++) {
//                 const batteryId: string = orderTable.rows[i].cells[0].innerText;
//                 const quantity: number = parseInt(orderTable.rows[i].cells[1].innerText);
//                 orderItems.push({ batteryId: batteryId, quantity: quantity });
//                 const batteryList: HTMLTableElement | null = document.getElementById("batteryList") as HTMLTableElement | null;
//                 if (batteryList) {
//                     for (let j = 1; j < batteryList.rows.length; j++) {
//                         if (batteryList.rows[j].cells[0].innerText === batteryId) {
//                             const price: number = parseFloat(batteryList.rows[j].cells[2].innerText);
//                             const itemTotalPrice: number = quantity * price;
//                             totalPrice += itemTotalPrice;
//                             orderTable.rows[i].cells[2].innerText = itemTotalPrice.toString(); // Update item total price
//                             break;
//                         }
//                     }
//                 }
//             }
//             const totalOrderPriceElement: HTMLElement | null = document.getElementById("totalOrderPrice");
//             if (totalOrderPriceElement) {
//                 totalOrderPriceElement.innerText = "Total Order Price: " + totalPrice.toString();
//             }
//             console.log("Order placed with items:", orderItems);
//             this.updateStock();
//             orderTable.innerHTML = "<tr><th>Battery ID</th><th>Quantity</th><th>Total Price</th></tr>";
//         }
//     }
// }
// const batteryManagementSystem = new BatteryManagementSystem();
// batteryManagementSystem.addBattery();--------------------
var BatteryManagementSystem = /** @class */ (function () {
    function BatteryManagementSystem() {
    }
    BatteryManagementSystem.prototype.addBattery = function () {
        var batteryIdInput = document.getElementById("batteryId");
        var batteryNameInput = document.getElementById("batteryName");
        var batteryPriceInput = document.getElementById("batteryPrice");
        var batteryStockInput = document.getElementById("batteryStock");
        if (batteryIdInput && batteryNameInput && batteryPriceInput && batteryStockInput) {
            var batteryId = batteryIdInput.value;
            var batteryName = batteryNameInput.value;
            // Ensure the price and stock are not NaN, default to 0 if invalid
            var batteryPrice = parseFloat(batteryPriceInput.value) || 0;
            var batteryStock = parseInt(batteryStockInput.value) || 0;
            var batteryList = document.getElementById("batteryList");
            if (batteryList) {
                var row = batteryList.insertRow();
                row.insertCell(0).innerText = batteryId;
                row.insertCell(1).innerText = batteryName;
                row.insertCell(2).innerText = batteryPrice.toString();
                row.insertCell(3).innerText = batteryStock.toString();
            }
            var addBatteryForm = document.getElementById("addBatteryForm");
            if (addBatteryForm) {
                addBatteryForm.reset();
            }
        }
    };
    BatteryManagementSystem.prototype.updateStock = function () {
        var batteryIdInput = document.getElementById("updateBatteryId");
        var quantityInput = document.getElementById("updateQuantity");
        if (batteryIdInput && quantityInput) {
            var batteryId = batteryIdInput.value;
            // Ensure quantity is not NaN, default to 0 if invalid
            var quantity = parseInt(quantityInput.value) || 0;
            var batteryList = document.getElementById("batteryList");
            if (batteryList) {
                for (var i = 1; i < batteryList.rows.length; i++) {
                    if (batteryList.rows[i].cells[0].innerText === batteryId) {
                        var stockCell = batteryList.rows[i].cells[3];
                        var currentStock = parseInt(stockCell.innerText);
                        stockCell.innerText = (currentStock + quantity).toString();
                        break;
                    }
                }
            }
            var updateStockForm = document.getElementById("updateStockForm");
            if (updateStockForm) {
                updateStockForm.reset();
            }
        }
    };
    BatteryManagementSystem.prototype.addOrderItem = function () {
        var batteryId = prompt("Enter Battery ID:");
        var quantity = parseInt(prompt("Enter Quantity:") || '0', 10); // Default to 0 if NaN
        if (batteryId !== null && !isNaN(quantity)) { // Ensure quantity is a valid number
            var orderTable = document.getElementById("orderItems");
            if (orderTable) {
                var row = orderTable.insertRow();
                row.insertCell(0).innerText = batteryId;
                row.insertCell(1).innerText = quantity.toString();
                row.insertCell(2).innerText = ''; // Initialize with empty string to be filled later
            }
        }
    };
    BatteryManagementSystem.prototype.placeOrder = function () {
        var orderTable = document.getElementById("orderItems");
        if (orderTable) {
            var totalPrice = 0;
            for (var i = 1; i < orderTable.rows.length; i++) {
                var batteryId = orderTable.rows[i].cells[0].innerText;
                var quantity = parseInt(orderTable.rows[i].cells[1].innerText);
                // Find the matching battery in the list and calculate total price
                var batteryList = document.getElementById("batteryList");
                if (batteryList) {
                    for (var j = 1; j < batteryList.rows.length; j++) {
                        if (batteryList.rows[j].cells[0].innerText === batteryId) {
                            var price = parseFloat(batteryList.rows[j].cells[2].innerText);
                            var itemTotalPrice = quantity * price;
                            totalPrice += itemTotalPrice;
                            orderTable.rows[i].cells[2].innerText = itemTotalPrice.toFixed(2); // Update with fixed total price
                            break;
                        }
                    }
                }
            }
            var totalOrderPriceElement = document.getElementById("totalOrderPrice");
            if (totalOrderPriceElement) {
                totalOrderPriceElement.innerText = "Total Order Price: $" + totalPrice.toFixed(2); // Display total price with two decimal places
            }
            // Clearing the form or resetting the table can be done here if needed
        }
    };
    return BatteryManagementSystem;
}());
var batteryManagementSystem = new BatteryManagementSystem();
