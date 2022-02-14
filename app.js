function updateProductNumber(number, productTotal, price, isIncrease) {
    const productInput = document.getElementById(number); // (product + '-number')
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber; // ei code if else er vitore chilo but caseTotal er shathe multyply korete jhamela howay ei code take baire likha hoise
    /* uporer code tar example:
    input = 10;
    x = input;
    x = x + 1;
    input = x; */
    // update total

    const pTotal = document.getElementById(productTotal); // (product + '-total')
    pTotal.innerText = productNumber * price;
    // calculate sub total
    calculateTotal()
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    // following code has transfered another function
    /* const phoneInput = document.getElementById('phone-number');
    const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = phoneNumber * 1219;

    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    const caseTotal = caseNumber * 59; */

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}


// phone increase decrease
document.getElementById('phone-plus').addEventListener
    ('click', function () {
        updateProductNumber('phone-number', 'phone-total', 1219, true); // ('phone')
    });

document.getElementById('phone-minus').addEventListener
    ('click', function () {
        updateProductNumber('phone-number', 'phone-total', 1219, false); // ('phone')
    })



// case increase decrease
document.getElementById('case-plus').addEventListener
    ('click', function () {
        updateProductNumber('case-number', 'case-total', 59, true); // ('case')

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

