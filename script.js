const plusButtons = document.querySelector('#plusBtn');
const minusButtons = document.querySelector('#minusBtn');
const quantities = document.querySelector('#quantity');
const addToCartButtons = document.querySelector('#addcart');

//add event listeners to plus buttons
plusButtons.forEach((button, index) => {
    button.addEventListener('click', () =>
    if (currentQuantity > 0) 
    { quantityDisplays[index].textContent = currentQuantity - 1; 
    } 
}); 
