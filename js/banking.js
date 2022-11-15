 //Button Handler

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-amount');

    const depositAmount = depositInput.value;

    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');

    depositTotal.innerText = depositAmount;

    //Clear the input field

    depositInput.value ='';
})

