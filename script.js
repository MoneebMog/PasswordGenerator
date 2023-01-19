function generatePassword() {
    // Get user input
    var passwordLength = document.getElementById("password-length").value;
    var includeUppercase = document.getElementById("uppercase").checked;
    var includeLowercase = document.getElementById("lowercase").checked;
    var includeNumbers = document.getElementById("numbers").checked;
    var includeSymbols = document.getElementById("symbols").checked;
  
    // Create character sets
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var symbols = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\`~";
  
    // Initialize character set and password
    var characterSet = "";
    var password = "";
  
    // Check which character sets to include
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      var random = Math.floor(Math.random() * 4) + 1;
      if (random === 1) {
        includeUppercase = true;
      } else if (random === 2) {
        includeLowercase = true;
      } else if (random === 3) {
        includeNumbers = true;
      } else {
        includeSymbols = true;
      }
    }
    if (includeUppercase) {
      characterSet += uppercase;
    }
    if (includeLowercase) {
      characterSet += lowercase;
    }
    if (includeNumbers) {
      characterSet += numbers;
    }
    if (includeSymbols) {
      characterSet += symbols;
    }
  
    // Generate password
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterSet.length);
      password += characterSet[randomIndex];
    }
  
    // Display password
    document.getElementById("password").value = password;
  }
  