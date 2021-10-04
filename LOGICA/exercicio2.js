const mercado = require('./mercado');

// complete a função "vitaminaC",
// para retornar um array com o nome de todas as frutas que contenham a vitamina C;
function vitaminaC() {
  const allFruits = mercado.frutas;
  const fruitsVitC = [];
  for (let i = 0; i < allFruits.length; i += 1){
    const vit = allFruits[i]['valorNutritivo'];
    if (vit.includes('C')) {
      fruitsVitC.push(allFruits[i]['nome']);
    }
  }
  return fruitsVitC;
}
console.log(vitaminaC())

module.exports = vitaminaC;
