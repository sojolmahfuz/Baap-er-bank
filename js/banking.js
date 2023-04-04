//  function doubleInt (num){
//     const result = num * 2;
//     return result;
//  }

//  const first = doubleInt (5);
//  const second = doubleInt (7);



function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    //Clear the input field
    depositInput.value ='';
    
    
    return newDepositAmount;

}
 
 //Button Handler

document.getElementById('deposit-button').addEventListener('click', function(){
    // const depositInput = document.getElementById('deposit-amount');

    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
    const newDepositAmount = getInputValue('deposit-amount');


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

    
})

    // Withdraw Event Handler

    document.getElementById('withdraw-button').addEventListener('click', function(){
        // const withdrawInput = document.getElementById('withdraw-input');
        // const withdrawAmountText = withdrawInput.value;
        // const newAmount = parseFloat(withdrawAmountText);
        // console.log(newAmount);

        const newAmount = getInputValue('withdraw-input');

         // Set Withdraw total
    
         const withdrawTotal = document.getElementById('withdraw-total');
         const previousWithdrawText = withdrawTotal.innerText;
         const previousWithdrawTotal = parseFloat(previousWithdrawText);
         const newWithdrawTotal = previousWithdrawTotal + newAmount;
         withdrawTotal.innerText = newWithdrawTotal;

    
        

         // Balance Update

         const balanceTotal = document.getElementById('balance-total');
         const previousBalanceText = balanceTotal.innerText;
         const previousBalanceTotal = parseFloat(previousBalanceText);
         const newBalanceTotal = previousBalanceTotal - newAmount;
         balanceTotal.innerText = newBalanceTotal;
 
    })

   