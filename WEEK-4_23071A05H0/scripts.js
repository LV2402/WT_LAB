// Shopping Cart Functions
function addToCart(title, author, price) {
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Check if book already in cart
    var found = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].title === title && cart[i].author === author) {
            cart[i].quantity += 1;
            found = true;
            break;
        }
    }
    if (!found) {
        cart.push({ title: title, author: author, price: price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
}

function displayCart() {
    var cart = JSON.parse(localStorage.getItem('cart') || '[]');
    var cartDiv = document.getElementById('cart-contents');
    if (!cartDiv) return;
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }
    var html = '<table style="width:100%;border-collapse:collapse;">';
    html += '<tr><th>Title</th><th>Author</th><th>Price</th><th>Quantity</th><th>Subtotal</th></tr>';
    var total = 0;
    cart.forEach(function(item) {
        var subtotal = item.price * item.quantity;
        total += subtotal;
        html += '<tr>' +
            '<td>' + item.title + '</td>' +
            '<td>' + item.author + '</td>' +
            '<td>$' + item.price.toFixed(2) + '</td>' +
            '<td>' + item.quantity + '</td>' +
            '<td>$' + subtotal.toFixed(2) + '</td>' +
            '</tr>';
    });
    html += '<tr><td colspan="4" style="text-align:right;"><strong>Total:</strong></td><td><strong>$' + total.toFixed(2) + '</strong></td></tr>';
    html += '</table>';
    cartDiv.innerHTML = html;
}

function clearCart() {
    localStorage.removeItem('cart');
    setTimeout(function() {
        displayCart();
        alert('Cart has been cleared!');
    }, 0);
}
// scripts.js
// JavaScript for registration, forgot password, and dynamic content loading

// Registration Form Validation
function validateRegistrationForm() {
    var username = document.getElementById('reg-username').value.trim();
    var password = document.getElementById('reg-password').value;
    var confirmPassword = document.getElementById('reg-confirm-password').value;
    var error = '';

    if (username.length < 5) {
        error += 'Username must be at least 5 characters long.\n';
    }
    if (password.length < 8) {
        error += 'Password must be at least 8 characters long.\n';
    }
    if (password !== confirmPassword) {
        error += 'Passwords do not match.\n';
    }
    if (error) {
        alert(error);
        return false;
    }
    alert('Registration successful!');
    return true;
}

// Forgot Password Form Validation
function validateForgotPasswordForm() {
    var email = document.getElementById('forgot-email').value.trim();
    var error = '';
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var knownEmails = ['user1@example.com', 'user2@example.com']; // Example emails

    if (!emailPattern.test(email)) {
        error += 'Please enter a valid email address.\n';
    } else if (!knownEmails.includes(email)) {
        error += 'Email address is not associated with any account.\n';
    }
    if (error) {
        alert(error);
        return false;
    }
    alert('Password reset link sent!');
    return true;
}

// Dynamic Content Loading
function loadBookDetails(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html;
        });
}

// Attach event listeners for dynamic loading if in nav.html
if (window.name === 'nav') {
    window.onload = function() {
        var links = document.querySelectorAll('a[target="content"]');
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                parent.frames['content'].location = link.getAttribute('href');
            });
        });
    };
}