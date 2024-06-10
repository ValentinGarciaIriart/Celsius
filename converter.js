function convertToFarhenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function getRandomColor() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

module.exports = { convertToFarhenheit, getRandomColor };
