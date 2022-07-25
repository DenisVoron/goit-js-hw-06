const inputEl = document.querySelector('#validation-input');
console.log(inputEl);
//console.log(inputEl[0].getAttribute('data-length'));
inputEl.addEventListener('blur', onCheckingNumberCharacters);
//actions[0].dataset.action
function onCheckingNumberCharacters(event) {
    //console.log(inputEl[0].dataset);
    const length = this.value.length;
    console.log(length);
    if (length === 6) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        //console.log('click');
    } else if (length > 6 || length < 6) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}