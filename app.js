function updateCaseNumber(isIncrease) {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    if (isIncrease == true) {
        caseInput.value = parseInt(caseNumber) + 1;
    } else if (caseNumber > 0) {
        caseInput.value = parseInt(caseNumber) - 1;
    }

}

document.getElementById('case-plus').addEventListener
    ('click', function () {
        updateCaseNumber(true);

        // case plus when different addevent function 
        /* 
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) + 1; */
    });

document.getElementById('case-minus').addEventListener
    ('click', function () {
        updateCaseNumber(false);

        // case minus when different addevent function
        /* 
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) - 1; */
    })
