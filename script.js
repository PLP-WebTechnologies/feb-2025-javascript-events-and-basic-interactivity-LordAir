// Counter functionality
let count = 0;
const counterDisplay = document.querySelector('.counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateCounter() {
    counterDisplay.textContent = count;
    counterDisplay.style.color = count > 0 ? 'green' : count < 0 ? 'red' : 'black';
}

// Form validation
const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('toggle-password');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        showSuccessMessage();
    }
});

function validateForm() {
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    } else if (nameInput.value.trim().length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }
    
    // Email validation
    if (emailInput.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }
    
    // Password validation
    if (passwordInput.value.trim() === '') {
        document.getElementById('password-error').textContent = 'Password is required';
        isValid = false;
    } else if (passwordInput.value.trim().length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        document.getElementById('password-error').textContent = '';
    }
    
    return isValid;
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showSuccessMessage() {
    const successMessage = document.getElementById('form-success');
    successMessage.textContent = `Thanks for signing up, ${nameInput.value.trim()}!`;
    successMessage.classList.remove('hidden');
    signupForm.reset();
    
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000);
}

// Password visibility toggle
togglePasswordBtn.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

// Modal functionality
const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('demo-modal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.addEventListener('click', function() {
    modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', function() {
    modal.classList.add('hidden');
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

// Input field validation on blur
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);

function validateName() {
    if (nameInput.value.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required';
    } else if (nameInput.value.trim().length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
    } else {
        document.getElementById('name-error').textContent = '';
    }
}

function validateEmail() {
    if (emailInput.value.trim() === '') {
        document.getElementById('email-error').textContent = 'Email is required';
    } else if (!isValidEmail(emailInput.value.trim())) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
    } else {
        document.getElementById('email-error').textContent = '';
    }
}

function validatePassword() {
    if (passwordInput.value.trim() === '') {
        document.getElementById('password-error').textContent = 'Password is required';
    } else if (passwordInput.value.trim().length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
    } else {
        document.getElementById('password-error').textContent = '';
    }
}
