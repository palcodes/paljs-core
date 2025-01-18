// Drilling down the stack to understand functions and prototypes. ( all though not used in modern javascript)
// lets say we have a bunch of boxes with their values.
const boxes = [
  {
    value: 2,

    getvalue() {
      return this.value;
    },
  },
  {
    value: 5,
    getValue() {
      return this.value;
    },
  },
  {
    value: 9,
    getValue() {
      return this.value;
    },
  },
];

// we can use prototypes here.
// assume this is a class with a certain behavior defined
const boxPrototype = {
  getValue() {
    return this.value;
  },
  setValue() {
    this.value + 4;
  },
};

const boxPrototypeList = [
  {
    value: 3,
    __proto__: boxPrototype,
  },
  {
    value: 9,
    __proto__: boxPrototype,
  },
];

// While this can be a little cumbersome, i could probably try to
// use inheritance here from a parent entity that shares its properties.
function Box(value) {
  this.boxValue = value;
}

// This is probably the best way to go about implementing inheritance in JS.
Box.prototype.getValue = function () {
  return this.value;
};

boxPrototypeList[1].setValue();
// console.log(boxps[1].getValue());
// console.log(new Box(4));

/**
 * The modernish way or cleaner way to do this is use Classes
 * which is anyway built on top of the prototype architecture.
 * From mdn: Classes are syntactic sugar over the prototypes. So
 * the chaining allows you to implement inheritance but
 * only so through prototypes.
 */
class BoxClass {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value + 3;
  }

  setValue() {
    this.value + 4;
  }
}

const box = new BoxClass(3);
console.log(box.getValue());

/**
 * How javascript actually executes the Class Inheritance paradigm
 * is actually pretty interesting.
 * It uses a chain of prototypes of each objects parents to carry the properties
 * of the previous one, like `extending` it.
 * So each object (any kind) has its prototype, and each prototype has its own
 * prototype until the last one which has a null (which designates
 * the end of line ).
 */

// Example: lets create a triangle

class Triangle {
  // a triangle needs 3 sides and a name to be initialized
  constructor(name, a, b, c) {
    this.name = name;
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }
}
const tA = new Triangle("TriA", 20, 40, 50);
console.log(tA.sideB);

// -----------------------------------------------------------------------

/**
 * One important distinction between trying to implement OOPs architecture
 * using Functions and Classes is that:
 * - Functions use the `prototype` syntax which can become a bit messy.
 * - Classes are cleaner, because they use the classic `extends` keyword.
 *
 *
 * */

/*
 * More differences:
 * - Methods defined inside constructor functions are recreated for every
 * which is very inefficient for memory and are not accessible directly in
 * its instances.
 *
 */
function Dog() {
  this.name = "tommy";

  /**
   * Here this. mark is necessary for the instances of this constructor
   * function to be able to access it.
   */
  this.bark = function () {
    console.log("tommy barked! ");
  };

  function gallop() {
    // wont be accessible.
  }
}
const dog2 = new Dog();

/**
 * And as have seen Classes can help solve for these.
 * A way to access Parent Class instance variable in the child Class is
 * to use the super() keyword.
 */
