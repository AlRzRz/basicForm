let passwordInput = document.querySelector('.passwordinput');
let confirmInput = document.querySelector('.passwordconfirm');
let errorStatement = document.querySelector('.noMatchMessage');

// passwordInput.addEventListener('input', () => {
//     if (passwordInput.value !== confirmInput.value) {
//         confirmInput.setCustomValidity('Passwords do not match!');
//         // passwordInput.setCustomValidity('Passwords do not match!');
//         passwordInput.setAttribute('isvalid', 'false');
//         errorStatement.style.display = 'block';
//     } else {
//         passwordInput.setCustomValidity('');
//         confirmInput.setCustomValidity('');
//         errorStatement.style.display = 'none';
//     }
// })

// confirmInput.addEventListener('input', () => {
//     if (passwordInput.value !== confirmInput.value) {
//         confirmInput.setCustomValidity('Passwords do not match!');
//         passwordInput.setCustomValidity('Passwords do not match!');
//         errorStatement.style.display = 'block';
//     } else {
//         passwordInput.setCustomValidity('');
//         confirmInput.setCustomValidity('');
//         errorStatement.style.display = 'none';
//     }
// })

confirmFocusCheck = false;


confirmInput.addEventListener('input', () => {
    confirmFocusCheck = true;
})


confirmInput.addEventListener('input', () => {
    if (passwordInput.value !== confirmInput.value) {
        confirmInput.setCustomValidity('Passwords do not match!');
        errorStatement.style.display = 'block';
        passwordInput.classList.add('error');
        confirmInput.classList.add('error');
    } else {
        confirmInput.setCustomValidity('');
        errorStatement.style.display = 'none';
        
        if (passwordInput.classList.contains('error')) {
            passwordInput.classList.remove('error');
        }
        if (confirmInput.classList.contains('error')) {
            confirmInput.classList.remove('error');
        }
    }
})


passwordInput.addEventListener('input', () => {
    if (confirmFocusCheck) {
        if (passwordInput.value !== confirmInput.value) {
            confirmInput.setCustomValidity('Passwords do not match!');
            errorStatement.style.display = 'block';
            passwordInput.classList.add('error');
            confirmInput.classList.add('error');
        } else {
            confirmInput.setCustomValidity('');
            errorStatement.style.display = 'none';
            
            if (passwordInput.classList.contains('error')) {
                passwordInput.classList.remove('error');
            }
            if (confirmInput.classList.contains('error')) {
                confirmInput.classList.remove('error');
            }
        }
    }
})