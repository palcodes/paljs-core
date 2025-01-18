// What are polyfills?
// A polyfill in simple terms, is a piece of code that is used to provide
// modern functionality in old browsers.
// Or they are used to support features across browsers when they have
// different implementations of the same features.

// Polyfills are not exclusively used for performance reasons. It is only better
// to add them on a when-needed or necessary basis.

/* How the word came out to be?
 * Poly meaning it could be solved using any number of techniques - it wasn't
 * limited to just being done using JavaScript, and fill would fill the hole in
 * the browser where the technology needed to be. It also didn't imply "old browser"
 * (because we need to polyfill new browser too).
 */

// Side Note: Another alternative to Polyfills is a transpiler which just translates the code
// from one version to another supported version on a particularly older engine.

if (!Math.trunc) {
  // if no such function
  // implement it
  Math.trunc = function (number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
