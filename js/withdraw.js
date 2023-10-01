// withdraw process step

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step1. get the withdraw amount when withdraw button clicked 
    const inputWithdrawField = document.getElementById('input-withdraw');
    const inputWithdrawAmountString = inputWithdrawField.value;
    const inputWithdrawAmount = parseFloat(inputWithdrawAmountString);

    // step 2. get the previous withdraw card amount when withdraw button clicked 
    const withdrawAmount = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = withdrawAmount.innerText;
    const prevoiusWithdrawAmount = parseFloat(previousWithdrawAmountString);

    
    // step 4. get the Balance card amount
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountString);
    
    // step . Clear the input field
    inputWithdrawField.value = '';
    // step 3. get the sum of previous withdraw amount and new withdraw amount set the sum amount to withdraw card
    if(inputWithdrawAmount > previousBalanceAmount){
        alert("You don't have sufficent balance");
        return;
    }

    currentWithdrawSum = prevoiusWithdrawAmount + inputWithdrawAmount;
    withdrawAmount.innerText = currentWithdrawSum;

    // step 5. set the subs Balance card amount
    const currentNewBalanceAmount = previousBalanceAmount - inputWithdrawAmount;
    balanceAmount.innerText = currentNewBalanceAmount;

})

