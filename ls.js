function loginvalid(){
    var adr = document.getElementById('email');
    var atIndex = adr.indexOf('@');
    var dotIndex = adr.lastIndexOf('.');

    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= adr.length) {
        alert("Invalid email");
        return false;
    } else {
        alert("Email is valid");
        return true;
    }
    
}

