document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;

    // Add your logic to store user data or sign up user

    alert('Sign up successful!');
});