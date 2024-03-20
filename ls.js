   function loginvalid() {
            var adr = document.getElementById('email').value; // Access value of the input field
            var atIndex = adr.indexOf('@');
            var dotIndex = adr.lastIndexOf('.');

            if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= adr.length) {
                alert("Invalid email");
            } else {
                alert("Email is valid");
            }
        }

