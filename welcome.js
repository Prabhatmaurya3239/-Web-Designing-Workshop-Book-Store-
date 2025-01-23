// Fetch the JSON data
fetch('books.json')
    .then(response => response.json())  // Parse JSON
    .then(data => {
        // Create HTML for each department
        Object.keys(data).forEach(department => {
            // Create a container for each department
            
            // Iterate through each book in the department
            data[department].forEach(book => {
                const bookContainer = document.createElement('div');
                
                // Generate the book HTML
                bookContainer.innerHTML = `
                    <ul>
                        <li><img src="${book.image}" alt="${book.title}" width="100" height="150"></li>
                        <li>${book.title}</li>
                        <li>${book.author}</li>
                        <li>${book.publisher}</li>
                        <li>${book.price}</li>
                    <li><button class="addbutton" data-title="${book.title}" data-price="${book.price}" data-image="${book.image}"><img src="image/cart.svg" alt="">Add to cart</button></li>
                       
                    </ul>
                `;
                
                // Append the book to the department container
                document.getElementById('book-list').appendChild(bookContainer);
            });
            
            // Append the department container to the main container
           
        });
    })
    .catch(error => {
        console.error('Error loading the JSON file:', error);
    });

    document.querySelector("body").addEventListener('click', function (e) {
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
    