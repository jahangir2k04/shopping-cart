function getTotalPrice(priceId){
    const phonePrice = document.getElementById(priceId);
    const phonePriceString = phonePrice.innerText;
    const newPhonePrice = parseInt(phonePriceString);
    return newPhonePrice;
}

function getAllTotal(totalId, value){
    const getSubTotal = document.getElementById(totalId);
    getSubTotal.innerText = value;
}

function subTotal(){
    const currentPhonePrice = getTotalPrice('phone-price');
    const currentCasePrice = getTotalPrice('case-price');

    const subTotal = currentPhonePrice + currentCasePrice;
    getAllTotal('sub-total', subTotal);

    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    getAllTotal('tax', tax);

    const total = subTotal + tax;
    getAllTotal('total', total);
}