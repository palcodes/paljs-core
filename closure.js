// Closure is a way to define functions that make use of the
// lexical environment, what I mean by that is it allows you
// to make abstracted definitions of functions that can be extended
// as needed to support more than one logic/behavior.
function makeAdder(x) {
  return function (y) {
    console.log(x + y);
  };
}

const add5 = makeAdder(5);

// console.log(add5(10));

function buildLib() {
  // lets assume that each lib will have 10 functions max.
  const fnArray = new Array(10);
  return function attachFn(fn) {
    fnArray.push(fn);
    console.log(fnArray);
  };
}

// this allows me to create multiple instances of buildLib construct
// const mathFn = buildLib();
const strFn = buildLib();
const mathFn = buildLib();

// console.log(strFn(["len", "concat", "read", "trim"]));
// console.log(mathFn(["add", "sub", "mul", "div", "len"]));

// lets try another iteration of these.
// now with private functions .
function BankAccount(initial) {
  let balance = initial;

  function changeAmountBy(amount) {
    balance += amount;
  }

  function showBalance(action) {
    console.log(`Balance After ${action}: ${balance}\n`);
  }

  return {
    debit(amount) {
      changeAmountBy(-amount);
      showBalance("debit");
    },
    credit(amount) {
      changeAmountBy(amount);
      showBalance("credit");
    },
  };
}

const userAccount1 = BankAccount(99233); // day 1
userAccount1.debit(12000); // day 2
userAccount1.debit(43000); // day 3
userAccount1.credit(2200); // day 4
