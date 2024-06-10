async function convert() {
    const celsius = document.getElementById('celsiusInput').value;
    const response = await fetch('/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ celsius })
    });
    const data = await response.json();
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p style="color: ${data.color};">Result: ${data.fahrenheit} Fahrenheit</p>`;
}
