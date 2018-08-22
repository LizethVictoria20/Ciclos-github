function factorial(num){
  let total = 1
  for(let i = 1; i <= num; i++){
    total = total * i
    console.log(total)
  }
}

/*6!
1 * 1 = 1
1 * 2 = 2
2 * 3 = 6
6 * 4 = 24
24 * 5 = 120
120 * 6 = 720*/