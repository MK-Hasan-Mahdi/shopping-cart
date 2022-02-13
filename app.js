function updateProductNumber(number, isIncrease) {
    const caseInput = document.getElementById(number);
    let caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber; // ei code if else er vitore chilo but caseTotal er shathe multyply korete jhamela howay ei code take baire likha hoise
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}
// phone increase decrease
document.getElementById('phone-plus').addEventListener
    ('click', function () {
        updateProductNumber('phone-number', true);
    })


// case increase decrease
document.getElementById('case-plus').addEventListener
    ('click', function () {
        updateProductNumber('case-number', true);

        // case plus when different addevent function 
        /* 
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) + 1; */
    });

document.getElementById('case-minus').addEventListener
    ('click', function () {
        updateProductNumber('case-number', false);

        // case minus when different addevent function
        /* 
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) - 1; */
    })
