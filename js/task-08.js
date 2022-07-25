const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit', onFormSabm);

function onFormSabm(event) {
    console.log(event);
    event.preventDefault();


    const formData = new FormData(event.currentTarget)

    formData.forEach((value, name) => {
        console.log('value', value);
        console.log('name', name);

        if (value === '' || name === '') {
            const message = "Перевірте заповнення всіх рядків!!";
            alert(message);
        }
    });
};