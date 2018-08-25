function division(num, divisor){
  let acum = 1
  let i = 0
    for( i = 0; acum <= num; i++){
      acum = acum + divisor
    }
    return i
}