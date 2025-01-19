// Learnings about ArrayBuffer
// With new buffer creation, memory span gets allocated.
// Could be thought of as an array. Initialized to 0.
// They are considered a part of the Javascript Typed Arrays.
// There's SharedArrayBuffer and ArrayBuffer
const shr = new SharedArrayBuffer(1024);
const arrBuf = new ArrayBuffer();

console.log(arrBuf);

// Typed arrays are fixed-length. So they don't support the
// usual array methods that change the size of the array.
