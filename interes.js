//calcular cuantos años tarda en
//duplicarse un capital depositado al 5% de interés anual.
const regla = 72;
let interés = 5

let años = 0

for(let i = 0; i <= interés; i++){
  años = regla / interés
  console.log(años)
}

//SoluciónII
const interés = 0.05 //Tasa del 5%
function añosADuplicar(capital){

  let beneficios = capital
  let años;

  const dobleCapital = capital * 2
  for(años = 0; beneficios < dobleCapital; años++){
    const interesAnual = beneficios * interés
    beneficios = beneficios + interesAnual
  }
  return años
}


