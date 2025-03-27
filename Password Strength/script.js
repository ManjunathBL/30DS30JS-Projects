document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('passwordInput');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const strengthText = document.getElementById('strengthText');
    const strengthBar = document.getElementById('strengthBar');
    
    // Criteria check elements
    const lengthCheck = document.getElementById('lengthCheck');
    const uppercaseCheck = document.getElementById('uppercaseCheck');
    const lowercaseCheck = document.getElementById('lowercaseCheck');
    const numberCheck = document.getElementById('numberCheck');
    const specialCheck = document.getElementById('specialCheck');

    // Password visibility toggle
    togglePasswordBtn.addEventListener('click', () => {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    });

    // Password strength evaluation
    passwordInput.addEventListener('input', evaluatePassword);

    function evaluatePassword() {
        const password = passwordInput.value;
        let strength = 0;
        
        // Reset strength bar and checks
        strengthBar.innerHTML = '';
        strengthBar.className = '';
        strengthText.textContent = 'Password Strength: ';

        // Criteria check regex
        const lengthRegex = /.{8,}/;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
        const specialRegex = /[!@#$%^&*()]/;

        // Check each criteria
        const isLengthValid = lengthRegex.test(password);
        const hasUppercase = uppercaseRegex.test(password);
        const hasLowercase = lowercaseRegex.test(password);
        const hasNumber = numberRegex.test(password);
        const hasSpecialChar = specialRegex.test(password);

        // Update criteria checks
        updateCriteriaCheck(lengthCheck, isLengthValid, '✔', '✖');
        updateCriteriaCheck(uppercaseCheck, hasUppercase, '✔', '✖');
        updateCriteriaCheck(lowercaseCheck, hasLowercase, '✔', '✖');
        updateCriteriaCheck(numberCheck, hasNumber, '✔', '✖');
        updateCriteriaCheck(specialCheck, hasSpecialChar, '✔', '✖');

        // Calculate strength
        strength += isLengthValid ? 1 : 0;
        strength += hasUppercase ? 1 : 0;
        strength += hasLowercase ? 1 : 0;
        strength += hasNumber ? 1 : 0;
        strength += hasSpecialChar ? 1 : 0;

        // Determine strength level
        let strengthLevel = 'Weak';
        let strengthClass = 'weak';

        if (strength === 5) {
            strengthLevel = 'Very Strong';
            strengthClass = 'very-strong';
        } else if (strength >= 4) {
            strengthLevel = 'Strong';
            strengthClass = 'strong';
        } else if (strength >= 3) {
            strengthLevel = 'Medium';
            strengthClass = 'medium';
        }

        // Update strength text and bar
        strengthText.textContent = `Password Strength: ${strengthLevel}`;
        const strengthBarFill = document.createElement('div');
        strengthBarFill.style.width = `${strength * 20}%`;
        strengthBarFill.classList.add(strengthClass);
        strengthBar.appendChild(strengthBarFill);
    }

    function updateCriteriaCheck(element, isValid, validSymbol, invalidSymbol) {
        element.textContent = `${isValid ? validSymbol : invalidSymbol} ${element.textContent.slice(2)}`;
        element.classList.toggle('valid', isValid);
        element.classList.toggle('invalid', !isValid);
    }
});