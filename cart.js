function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartBody = document.querySelector('table');
    const totalAmountElement = document.querySelector('h3');
    let totalAmount = 0;
    cart.forEach(item => {
        // Calculate total price
     
        let price = item.price
        
       
        totalAmount += price * item.quantity;
        
        
        // Create a row for each cart item
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.title}" style="width:50px;height:70px;"><br>${item.title}</td>
            <td>${item.quantity}</td>
            <td>₹${price * item.quantity}</td>
        `;
        
        // Append the row to the table
        cartBody.appendChild(row);
    });
    
    // Update total amount
    totalAmountElement.textContent = `Total Amount:₹${totalAmount}`;
}
displayCart();
// Display cart when the page loads
document.querySelector('button').addEventListener('click', function(e){
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item =>{
        cart.pop()
    })
    localStorage.setItem('cart', JSON.stringify(cart));

window.location.href = "cart.html"
});
