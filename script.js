    const form = document.getElementById('subscriptionForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subscribeButton = document.getElementById('subscribeButton');
    const successMessage = document.getElementById('successMessage');

    const validateName = () => /^[a-zA-ZА-Яа-я]+$/.test(nameInput.value);
    const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const validatePhone = () => /^\d{11}$/.test(phoneInput.value);

    const updateButtonState = () => {
        subscribeButton.disabled = !(validateName() && validateEmail() && validatePhone());
    };

    nameInput.onfocus = () => {
        nameInput.nextElementSibling.style.display = "inline";
    };
    nameInput.onblur = () => {
        nameInput.nextElementSibling.style.display = "none";
        if (!validateName()) {
            document.getElementById('nameError').innerText = "Некорректное имя";
        } else {
            document.getElementById('nameError').innerText = "";
        }
        updateButtonState();

    emailInput.onfocus = () => {
        emailInput.nextElementSibling.style.display = "inline";
    };
    emailInput.onblur = () => {
        emailInput.nextElementSibling.style.display = "none";
        if (!validateEmail()) {
            document.getElementById('emailError').innerText = "Некорректный Email";
        } else {
            document.getElementById('emailError').innerText = "";
        }
        updateButtonState();
    };

    phoneInput.onfocus = () => {
        phoneInput.nextElementSibling.style.display = "inline";
    };
    phoneInput.onblur = () => {
        phoneInput.nextElementSibling.style.display = "none";
        if (!validatePhone()) {
            document.getElementById('phoneError').innerText = "Телефон должен содержать 11 цифр";
        } else {
            document.getElementById('phoneError').innerText = "";
        }
        updateButtonState();
    };

    form.onsubmit = (event) => {
        event.preventDefault();
        const name = nameInput.value;
        successMessage.innerHTML = `Спасибо за подписку, ${name}!`;
        successMessage.style.display = "block";
        form.reset();
        updateButtonState();
    };
};

    // const nameInput = document.getElementById('name'); 
    // const emailInput = document.getElementById('email');
    // const phoneInput = document.getElementById('phone');
    // const subscribeButton = document.getElementById('subscribeButton');
    // const successMessage = document.getElementById('successMessage');
    // const nameHint = document.getElementById('nameHint');
    // const emailHint = document.getElementById('emailHint');
    // const phoneHint = document.getElementById('phoneHint');

    // document.addEventListener('DOMContentLoaded', () => {
    //     function validateName() {
    //         const name = nameInput.value.trim();
    //         return /^[a-zA-Zа-яА-ЯёЁ]+$/.test(name);
    //     }
    //     function validateEmail() {
    //         const name = nameInput.value.trim();
    //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    //     }
    //     function validatePhone() {
    //         const name = nameInput.value.trim();
    //         return /^\d{11}$/.test(phone);
    //     }

    //     function validateForm() {
    //         const isNameValid = validateName();
    //         const isEmailValid = validateEmail();
    //         const isPhoneValid = validatePhone();
    //     }

    //     nameInput.addEventListener('input', validateForm);
    //     nameInput.addEventListener('focus', () => nameHint.style.display = 'block');
    //     nameInput.addEventListener('blur', () => nameHint.style.display = 'none');
    // });

    // document.getElementById('subscriptionForm').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     if (!subscribeButton.disabled) {
    //         successMessage.style.display = 'block';
    //         e.target.reset();
    //         validateForm();
    //     }
    // });
