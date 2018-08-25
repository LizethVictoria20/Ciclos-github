function media(array){
  let suma = 0
  let resultado = 0

  for(let i = 0; i < array.length; i++){
    suma = suma + array[i]
  }
  resultado =  suma / array.length
  return resultado
}