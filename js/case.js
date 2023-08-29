function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
    
    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(newCaseNumber){
    const totalCasePrice = newCaseNumber * 59;
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = totalCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);

    subTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);

    subTotal();
});