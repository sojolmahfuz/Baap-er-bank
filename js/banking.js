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

    // Withdraw Event Handler

    document.getElementById('withdraw-button').addEventListener('click', function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const newAmount = parseFloat(withdrawAmountText);
        console.log(newAmount);

         // Set Withdraw total
    
         const withdrawTotal = document.getElementById('withdraw-total');
         const previousWithdrawText = withdrawTotal.innerText;
         const previousWithdrawTotal = parseFloat(previousWithdrawText);
         const newWithdrawTotal = previousWithdrawTotal + newAmount;
         withdrawTotal.innerText = newWithdrawTotal;

         // clear withdraw input

         withdrawInput.value = '';

         // Balance Update

         const balanceTotal = document.getElementById('balance-total');
         const previousBalanceText = balanceTotal.innerText;
         const previousBalanceTotal = parseFloat(previousBalanceText);
         const newBalanceTotal = previousBalanceTotal - newAmount;
         balanceTotal.innerText = newBalanceTotal;
 
    })

   