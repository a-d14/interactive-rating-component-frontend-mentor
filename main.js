
let selectedValue = 0;

const parentElement = document.querySelector('.interactive-rating-component');

document.querySelector('.interactive-rating-component__select-rating').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        Array.from(e.target.parentElement.children).forEach((el) => el.classList.remove('selected'));
        e.target.classList.add('selected');
        selectedValue = e.target.textContent;
    }
});

document.querySelector('.interactive-rating-component__submit-rating').addEventListener('click', () => {
    if(selectedValue !== 0) {
        parentElement.classList.add('interactive-rating-component--submitted');
        parentElement.insertAdjacentHTML('afterbegin', generateSuccessMessage(selectedValue));
    }
});

function generateSuccessMessage(selectedValue) {
    parentElement.innerHTML = '';
    return `
        <header class="interactive-rating-component--submitted__header">
            <img src='images/illustration-thank-you.svg' />
            <span>You selected ${selectedValue} out of 5</span>
            <h1>Thank you!</h1>
        </header>
        <p class="interactive-rating-component--submitted__body">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    `;
}
