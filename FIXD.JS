document.getElementById('depositForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var principal = parseFloat(document.getElementById('principal').value);
  var interestRate = parseFloat(document.getElementById('interestRate').value);
  var tenure = parseFloat(document.getElementById('tenure').value);

  // Calculate the maturity amount
  var maturityAmount = principal * Math.pow(1 + (interestRate / 100), tenure);

  // Format the maturity amount to Indian Rupees format
  var formattedMaturityAmount = formatAmount(maturityAmount);

  // Display the result
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  var resultParagraph = document.createElement('p');
  resultParagraph.textContent = 'Maturity Amount: ' + formattedMaturityAmount;
  resultDiv.appendChild(resultParagraph);
});

// Function to format number to Indian Rupees format
function formatAmount(amount) {
  // Add commas for thousands separator
  var formattedAmount = amount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR'
  });

  // Remove decimal part if it's .00
  if (formattedAmount.slice(-3) === ".00") {
    formattedAmount = formattedAmount.slice(0, -3);
  }

  return formattedAmount;
}
