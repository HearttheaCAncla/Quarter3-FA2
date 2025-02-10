function add(num1, num2) {
  let a = num1 + num2;
  result(a);
  return a;
}

function sub(num1, num2) {
  let a = num1 - num2;
  result(a);
  return a;
}

function mul(num1, num2) {
  let a = num1 * num2;
  result(a);
  return a;
}

function div(num1, num2) {
  let a = num1 / num2;
  result(a);
  return a;
}

function rem(num1, num2) {
  let a = num1 % num2;
  result(a);
  return a;
}

function result(a) {
  document.getElementById('ans').innerHTML = a;
}
