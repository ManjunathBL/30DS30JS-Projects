let totalAmount = 0;
let totalCalories = 0;
let totalProtein = 0;
let totalCarbs = 0;
let totalFat = 0;

function addItem() {
    const foodSelect = document.getElementById("food");
    const selectedOption = foodSelect.options[foodSelect.selectedIndex];

    const foodName = selectedOption.value;
    const price = parseFloat(selectedOption.getAttribute("data-price"));
    const calories = parseInt(selectedOption.getAttribute("data-cal"));
    const protein = parseInt(selectedOption.getAttribute("data-protein"));
    const carbs = parseInt(selectedOption.getAttribute("data-carbs"));
    const fat = parseInt(selectedOption.getAttribute("data-fat"));

    // Add item to table
    const table = document.getElementById("orderList");
    const row = table.insertRow();
    
    row.innerHTML = `
        <td>${foodName}</td>
        <td>${price}</td>
        <td>${calories}</td>
        <td>${protein}</td>
        <td>${carbs}</td>
        <td>${fat}</td>
        <td><button onclick="removeItem(this, ${price}, ${calories}, ${protein}, ${carbs}, ${fat})">Remove</button></td>
    `;

    // Update totals
    totalAmount += price;
    totalCalories += calories;
    totalProtein += protein;
    totalCarbs += carbs;
    totalFat += fat;

    updateTotals();
}

function removeItem(button, price, calories, protein, carbs, fat) {
    const row = button.parentElement.parentElement;
    row.remove();

    // Update totals
    totalAmount -= price;
    totalCalories -= calories;
    totalProtein -= protein;
    totalCarbs -= carbs;
    totalFat -= fat;

    updateTotals();
}

function updateTotals() {
    document.getElementById("totalAmount").innerText = `Total Amount: ₹${totalAmount}`;
    document.getElementById("totalCalories").innerText = `Total Calories: ${totalCalories} kcal`;
    document.getElementById("totalProtein").innerText = `Protein: ${totalProtein}g`;
    document.getElementById("totalCarbs").innerText = `Carbs: ${totalCarbs}g`;
    document.getElementById("totalFat").innerText = `Fat: ${totalFat}g`;
}

function printBill() {
    let billContent = `
        <h2>Final Bill</h2>
        <p>Total Amount: ₹${totalAmount}</p>
        <p>Total Calories: ${totalCalories} kcal</p>
        <p>Protein: ${totalProtein}g</p>
        <p>Carbs: ${totalCarbs}g</p>
        <p>Fat: ${totalFat}g</p>
    `;

    const newWindow = window.open("", "_blank");
    newWindow.document.write(billContent);
    newWindow.document.close();
    newWindow.print();
}
