//calcular cuantos años tarda en
//duplicarse un capital depositado al 5% de interés anual.
const regla = 72;
let interés = 15

let años = 0

for(let i = 0; i <= interés; i++){
  años = regla / interés
  console.log(años)
}
