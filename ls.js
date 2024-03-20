        function loginvalid() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // Check if email is valid
            var atIndex = email.indexOf('@');
            var dotIndex = email.lastIndexOf('.');

            if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
                alert("Invalid email");
                return; // Exit function early if email is invalid
            }

            // Check if password is not empty
            if (password.trim() === '') {
                alert("Please enter your password.");
                return; // Exit function early if password is empty
            }

            // If both email and password are valid, proceed with login
            alert("Login successful!");
            // Here you can add further logic, such as submitting the form or redirecting the user
        }

