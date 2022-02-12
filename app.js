document.getElementById('case-plus').addEventListener
    ('click', function () {
        // case plus
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) + 1;
    });

document.getElementById('case-minus').addEventListener
    ('click', function () {
        // case minus
        const caseInput = document.getElementById('case-number');
        const caseNumber = caseInput.value;
        caseInput.value = parseInt(caseNumber) - 1;
    })
