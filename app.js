function updateProductNumber(number, productTotal, price, isIncrease) {
    const productInput = document.getElementById(number);
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber; // ei code if else er vitore chilo but caseTotal er shathe multyply korete jhamela howay ei code take baire likha hoise
    const caseTotal = document.getElementById(productTotal);
    caseTotal.innerText = productNumber * price;
}
// phone increase decrease
document.getElementById('phone-plus').addEventListener
    ('click', function () {
        updateProductNumber('phone-number', 'phone-total', 1219, true);
    });

document.getElementById('phone-minus').addEventListener
    ('click', function () {
        updateProductNumber('phone-number', 'phone-total', 1219, false);
    })



// case increase decrease
document.getElementById('case-plus').addEventListener
    ('click', function () {
        updateProductNumber('case-number', 'case-total', 59, true);

        // case plus when different addevent function 
        /* 
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) + 1; */
    });

document.getElementById('case-minus').addEventListener
    ('click', function () {
        updateProductNumber('case-number', 'case-total', 59, false);

        // case minus when different addevent function
        /* 
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) - 1; */
    })
