function generatePassword() {
  const length = document.getElementById("password-length").value;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById(
    "password-text"
  ).innerText = `Generated Password: ${password}`;
}

function copyToClipboard() {
  const passwordText = document.getElementById("password-text");
  const textarea = document.createElement("textarea");
  textarea.value = passwordText.innerText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("Password copied to clipboard!");
}
