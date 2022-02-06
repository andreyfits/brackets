module.exports = function check(str, bracketsConfig) {
    const stack = str.length / 2;
    const symbols = bracketsConfig.map(symbol => symbol.join(''));

    for (let i = 0; i < stack; i++) {
        symbols.forEach(symbol => {
            str = str.replace(symbol, '');
        });
    }

    return str.length === 0;
}
