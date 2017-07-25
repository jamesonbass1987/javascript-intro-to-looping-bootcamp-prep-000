//FOR LOOP

function forLoop(arr){

  for (var i = 1; i <= 25; i++) {
        if (i === 1) {
          arr.push('I am ' + i + ' strange loop.')
        } else {
          arr.push('I am ' + i + ' strange loops.')
        }
  }
  return arr
}

//WHILE LOOP

function whileLoop(num) {
  let countdown = num;

  while (countdown > 0) {
    console.log(--countdown)
  }

    return 'done'
}

//DO WHILE LOOP

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(arr) {
  do {
    arr.pop()
  } while (maybeTrue() && arr.length > 0)
  return arr
}
