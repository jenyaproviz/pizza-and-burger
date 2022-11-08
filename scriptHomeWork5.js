function pizza() {
  alert('Hello, dear costumer, you are going to order pizza')
  let addToPizza = prompt('Do you want to add some vegetables to your pizza?')
  if (addToPizza == 'yes') {
    let a = prompt('If you want double cheese, say cheese!')
    let b = prompt('If you would like to add an onion, say onion!')
    let c = prompt('If you want to add a tomato, say tomato!')

    if (a == 'cheese' || b == 'onion' || c == 'tomato') {
      alert('you are going to order pizza with ' + a + ' ' + b + ' ' + c)
    } else if (a == 'cheese' || b == 'onion' || c == ' ') {
      alert('you are going to order pizza with ' + a + ' ' + b)
    } else if (a == 'cheese' || b == ' ' || c == ' ') {
      alert('you are going to order pizza with ' + a)
    } else if (a == ' ' || b == 'onion' || c == 'tomato') {
      alert('you are going to order pizza with ' + b + ' ' + c)
    } else if (a == ' ' || b == ' ' || c == 'tomato') {
      alert('you are going to order pizza with ' + c)
    } else if (a == ' ' || b == 'onion' || c == ' ') {
      alert('you are going to order pizza with ' + b)
    } else {
      alert('you are going to order just a pizza')
    }
  } else {
    alert('you are going to order just a pizza')
  }
}

function burger() {
  alert('dear costumer, you are going to order burger')
  let addToBurger = prompt('Do you want to add something to the order?')
  if (addToBurger == 'yes') {
    let additions = prompt(
      'please choose what you want to add: onion, double meat, tomato, cucumber',
    )
    alert('you are going to order burger with' + '   ' + additions)
  } else {
    alert('you are going to order only burger, without vegetables')
  }
}
