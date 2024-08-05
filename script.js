document.getElementById('check-btn').addEventListener('click', function() {
    const inputElement = document.getElementById('text-input');
    const resultElement = document.getElementById('result');
    const inputText = inputElement.value;

    if (!inputText) {
        alert('Please input a value');
        return;
    }

    const processedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const isPalindrome = processedText === processedText.split('').reverse().join('');

    if (isPalindrome) {
        resultElement.innerHTML = `<span>${inputText}</span> is a palindrome`;

    } else {
        resultElement.innerHTML = `<span>${inputText}</span> is not a palindrome`;

    }
});
