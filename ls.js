function loginvalid(){
    var adr = document.getElementById('email');
    var atIndex = adr.indexOf('@');
    var dotIndex = adr.lastIndexOf('.');

    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= adr.length) {
        console.log("Invalid email");
        return false;
    } else {
        console.log("Email is valid");
        return true;
    }
    
}

loginvalid()
