//muestre por pantalla la sucesión de números: 1 -1 2 -2 3 -3 4 -4 5 -5 6 -6 7 -7 8 -8 9 -9 10 -10

function multiplicando(num, factor){
  let acumulador = 0
    for(let i = 0; i < factor; i++){
      acumulador = acumulador + num
    }
    return(acumulador)
}
