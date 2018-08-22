//muestre por pantalla la sucesión de números: 1 -1 2 -2 3 -3 4 -4 5 -5 6 -6 7 -7 8 -8 9 -9 10 -10
let resultado =  ''
for(let i = 1; i <= 10; i++){

var numNegativos = (-i)
resultado = resultado + ' ' + i + ' ' + numNegativos
}
