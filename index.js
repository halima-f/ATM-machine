// script.js

let balance = 1000; // Initial balance for the user
let pinCode = '1234'; // Correct PIN code
let enteredPin = ''; // Variable to store the entered PIN

// Display a message on the screen
function showMessage(message) {
  document.getElementById('message-area').innerText = message;
}

// Validate PIN input
function validatePin() {
  enteredPin = document.getElementById('pin').value;
  if (enteredPin === pinCode) {
    showMessage('PIN validated successfully!');
    document.getElementById('pin-section').classList.add('hidden');
    document.getElementById('atm-actions').classList.remove('hidden');
  } else {
    showMessage('Incorrect PIN. Please try again.');
  }
}

// Show deposit form
function showDepositForm() {
  document.getElementById('deposit-form').classList.remove('hidden');
  document.getElementById('withdraw-form').classList.add('hidden');
}

// Show withdraw form
function showWithdrawForm() {
  document.getElementById('withdraw-form').classList.remove('hidden');
  document.getElementById('deposit-form').classList.add('hidden');
}

// Handle deposit
function deposit() {
  const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    showMessage('Please enter a valid amount.');
    return;
  }
  balance += depositAmount;
  document.getElementById('balance').innerText = balance.toFixed(2);
  document.getElementById('deposit-amount').value = ''; // Clear input
  showMessage('Deposit successful!');
  document.getElementById('deposit-form').classList.add('hidden');
}

// Handle withdraw
function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    showMessage('Please enter a valid amount.');
    return;
  }
  if (withdrawAmount > balance) {
    showMessage('Insufficient balance.');
    return;
  }
  balance -= withdrawAmount;
  document.getElementById('balance').innerText = balance.toFixed(2);
  document.getElementById('withdraw-amount').value = ''; // Clear input
  showMessage('Withdrawal successful!');
  document.getElementById('withdraw-form').classList.add('hidden');
}

// Check balance
function checkBalance() {
  showMessage(`Your current balance is: $${balance.toFixed(2)}`);
}

// Log out
function logout() {
  showMessage('You have logged out.');
  document.getElementById('atm-actions').classList.add('hidden');
  document.getElementById('pin-section').classList.remove('hidden');
  document.getElementById('pin').value = ''; // Clear PIN input
}
  
// Cancel current action (deposit/withdraw)
function cancelAction(actionType) {
  if (actionType === 'deposit') {
    document.getElementById('deposit-form').classList.add('hidden');
  } else if (actionType === 'withdraw') {
    document.getElementById('withdraw-form').classList.add('hidden');
  }
  showMessage('Action cancelled.');
}
