// Conversión de Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// Conversión de Dólar a Yen
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    return valueInYen;
}

// Conversión de Yen a Libra
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    return valueInPound;
}

// Función de suma básica
const sum = (a,b) => {
    return a + b
}

// Exportaciones
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}
