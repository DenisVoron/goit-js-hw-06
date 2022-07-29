const inputEl = document.querySelector('#validation-input[data-length="6"]');
//console.log(inputEl);

inputEl.addEventListener('blur', onCheckingNumberCharacters);
function onCheckingNumberCharacters() {
    const length = this.value.length;
    const tag = inputEl.dataset.length;
    const tagValue = Number(tag);


    if (length === tagValue) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}