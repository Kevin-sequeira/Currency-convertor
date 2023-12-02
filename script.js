function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Static exchange rates (for simplicity, in a real app, you'd fetch the latest rates from an API)
    const exchangeRates = {
        usd: {
            eur: 0.85,
            gbp: 0.73,
            inr: 74.22,
        },
        eur: {
            usd: 1.18,
            gbp: 0.86,
            inr: 88.89,
        },
        gbp: {
            usd: 1.37,
            eur: 1.16,
            inr: 102.11,
        },
        inr: {
            usd: 0.013,
            eur: 0.011,
            gbp: 0.0098,
        },
    };

    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates[fromCurrency])) {
        alert('Invalid currency selection.');
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
