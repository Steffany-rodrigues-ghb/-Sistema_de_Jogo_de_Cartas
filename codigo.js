const input= require('readline-sync');


let criatura = input.question("Digite o nome da criatura que deseja contar: ");

// VARIÁVEIS BASE 
const poder_das_cartas = [8, 15, 4, 22, 10, 3, 18];

const criaturas_invocadas = [
  "goblin", 
  "esqueleto", 
  "lobo mágico", 
  "esqueleto", 
  "dragão bebê", 
  "esqueleto"
];

// aqui foi criado a função avaliarCarta, que vai pegar o poder de cada e ver de é forte ou fraca.
function avaliar_carta(poder) {
  if (poder >= 10) {
    return "Forte";
  } else {
    return "Fraca";
  }
}


// aqui foi criado um loop p ver a lista e ver se cada carta é forte ou fraca e dps dar o resultado.
for (const poder of poder_das_cartas) { //for of aqui vai ver cada coisa da lista e colocar na variavel poder.
  const resultado = avaliar_carta(poder);
  console.log(`A carta de poder ${poder} é ${resultado}`);
}

//aqui a função vai contar quantas vzs o bicho vai aparecer na lista e dar o resultado total.
 function contar_criatura(lista, nome_alvo) {
  let total = 0;
  for (const criatura of lista) {
    if (criatura === nome_alvo) {
      total++;
    }
  }
  return total;
}

console.log(contar_criatura(criaturas_invocadas, criatura));