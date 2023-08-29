function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);

    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    const phonePrice = document.getElementById('phone-price');
    const newPhonePrice = newPhoneNumber * 1219;
    phonePrice.innerText = newPhonePrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);

    subTotal();
});


document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);

    subTotal();
});