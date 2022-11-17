 //Button Handler

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-amount');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount  + newDepositAmount;

    depositTotal.innerText = newDepositTotal;


    // Update Account Balance

    const balanceTotal = document.getElementById('balance-total');
    
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //Clear the input field

    depositInput.value ='';
})

