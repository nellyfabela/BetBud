const createBetHandler = async () => {
    const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedValues = [];

    checkBoxes.forEach(checkBox => {
        if(checkBox.checked) {
            checkedValues.push(checkBox.value);
        }
    });
    
    const category_name = checkedValues[0];
    const product_name = checkedValues[1];

    if(category_name && product_name) {
        const response = await fetch('/api/bet', {
            method: 'POST', 
            body: JSON.stringify({category_name, product_name}),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            console.log('Bet created ');
        } else {
            alert('Failed to create a bet ');
        }
    }
};

document.querySelector('#bet-btn')
        .addEventListener('click', createBetHandler);