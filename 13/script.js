function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (!validateUsername(username)) {
    document.getElementById("usernameError").textContent = "Username is invalid. It should contain at least one uppercase letter, one lowercase letter, one special character, one number, and have a minimum length of 8 characters.";
    return false;
  } else {
    document.getElementById("usernameError").textContent = "";
  }
  if (!validatePassword(password)) {
    document.getElementById("passwordError").textContent = "Password is invalid. It should contain at least one uppercase letter, one special character, and have a minimum length of 8 characters.";
    return false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }
  return true;
}
function validateUsername(username) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(username);
}
function validatePassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
}