// Fetch the JSON data
fetch('books.json')
    .then(response => response.json())  // Parse JSON
    .then(data => {
        
        Object.keys(data).forEach(department => {
            const table = document.querySelector("table");
            const header = document.createElement("tr");
            header.id = department;
            header.innerHTML = `<th colspan="6">${department} Department</th>`;
            table.appendChild(header);

            data[department].forEach(book => {
                const bookContainer = document.createElement('tr');
                
                // Generate the book HTML
                bookContainer.innerHTML = `
                    <td><img src="${book.image}" alt="Book-CSE" style="width:100px;height:150px;"></td>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.publisher}</td>
                    <td>₹${book.price}</td>
                    <td><button class="addbutton" data-title="${book.title}" data-price="${book.price}" data-image="${book.image}"><img src="image/cart.svg" alt="">Add to cart</button></td>
                `;
                
                // Append the book to the department container
                table.appendChild(bookContainer);
            });
        });
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });

// Event delegation for adding to the cart
document.querySelector("table").addEventListener('click', function (e) {
    if (e.target && e.target.matches('.addbutton')) {
        const title = e.target.getAttribute('data-title');
        const price = e.target.getAttribute('data-price');
        const image = e.target.getAttribute('data-image');
        
        alert("Add Successful!");
        addToCart(title, price, image);
    }
});

// Function to add a book to the cart in LocalStorage
function addToCart(title, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingBookIndex = cart.findIndex(item => item.title === title);
    
    if (existingBookIndex !== -1) {
        // If the book is already in the cart, increase the quantity
        cart[existingBookIndex].quantity += 1;
    } else {
        // If it's a new book, add it to the cart
        cart.push({ title, price, image, quantity: 1 });
    }
    
    // Save the updated cart back to LocalStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
