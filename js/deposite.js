
// deposite process step
// step1. get the deposite button clicked 
document.getElementById('btn-deposite').addEventListener('click', function () {
    // step2. get the deposite input field value when deposite button clicked 
    const inputDepositeField = document.getElementById('input-deposite');
    const inputDepositeAmountString = inputDepositeField.value;
    const inputDepositeAmount = parseFloat(inputDepositeAmountString); // to convert input string to number

    // step 3. get the deposite card amount 
    // const depositeContainer = document.getElementById('deposite-container'); //parent div
    const depositeAmount = document.getElementById('deposite-amount'); // child p
    const previousDepositeAmountString = depositeAmount.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountString); // to convert input string to number

    // step 4. get the sum of new deposite amount and previous diposite amount and set the new deposite amount to the card
    const currentDepositeSum = previousDepositeAmount + inputDepositeAmount;
    depositeAmount.innerText = currentDepositeSum;

    // step 5. get the Balance card amount
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const previousBalanceAmount = parseFloat(balanceAmountString);
    // step 6. get the sum of new balance amount and previous balance amount and set the sum balance amount to the card
    const newBalanceAmount = previousBalanceAmount + inputDepositeAmount;
    balanceAmount.innerText = newBalanceAmount;
    // step . Clear the input field
    inputDepositeField.value = '';
})

