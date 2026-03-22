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
