const passwordBox = document.getElementById("Password")
const length = 8;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "@#$%^&*()_+~{}[]|\:;<>?,./"

const alchar = uppercase + lowercase + number + symbol

let createPassword = () => {
    let password = " "
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += alchar[Math.floor(Math.random() * alchar.length)];
    }

    passwordBox.value=password
}

let copypassword = () => {
    passwordBox.select();  // Select the content of the input field
    document.execCommand("copy");  // Copy the selected content to the clipboard
    alert("Password copied to clipboard!");  // Optional: show an alert to confirm
};


document.getElementById("generateButton").addEventListener("click", createPassword);