document.addEventListener('DOMContentLoaded', () => {
    // Show registration form when "Register here" is clicked
    document.getElementById('show-register').addEventListener('click', () => {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    });

    // Show login form when "Login here" is clicked
    document.getElementById('show-login').addEventListener('click', () => {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    });

    // Handle registration
    document.getElementById('register-btn').addEventListener('click', () => {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const phone = document.getElementById('register-phone').value;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('phone', phone);
        alert('Registration successful! Please login.');
        document.getElementById('show-login').click();
    });

    // Handle login
    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
            alert(`Welcome ${username} to IndxYash!`);
            displayWelcomeMessage();
            showSections();
        } else {
            alert('Incorrect username or password');
        }
    });

    // Handle OTP sending
    document.getElementById('otp-btn').addEventListener('click', () => {
        const phone = document.getElementById('login-phone').value;

        if (phone === localStorage.getItem('phone')) {
            const otp = Math.floor(1000 + Math.random() * 9000); // Generate a random OTP
            localStorage.setItem('otp', otp);
            alert(`OTP sent: ${otp}`); // Simulate sending OTP (for demo purposes)

            document.getElementById('otp-input').style.display = 'block';
            document.getElementById('otp-login-btn').style.display = 'block';
        } else {
            alert('Phone number not registered.');
        }
    });

    // Handle OTP login
    document.getElementById('otp-login-btn').addEventListener('click', () => {
        const enteredOtp = document.getElementById('otp-input').value;

        if (enteredOtp === localStorage.getItem('otp')) {
            const username = localStorage.getItem('username');
            alert(`Welcome ${username} to IndxYash!`);
            displayWelcomeMessage();
            showSections();
        } else {
            alert('Incorrect OTP.');
        }
    });

    function displayWelcomeMessage() {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
        setTimeout(() => {
            document.getElementById('welcome-message').style.display = 'none';
        }, 3000); // Hide welcome message after 3 seconds
    }

    function showSections() {
        document.getElementById('sections-container').style.display = 'block';
        document.getElementById('support-container').style.display = 'block';
    }

    // Event listeners for section navigation
    document.getElementById('quiz-section').addEventListener('click', () => {
        document.getElementById('sections-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
    });

    document.getElementById('puzzle-section').addEventListener('click', () => {
        alert("Puzzles section coming soon!");
    });

    document.getElementById('quote-section').addEventListener('click', () => {
        alert("Quotes section coming soon!");
    });

    document.getElementById('fact-section').addEventListener('click', () => {
        alert("Facts section coming soon!");
    });
});

