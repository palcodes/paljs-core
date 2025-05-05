/**
* Simple version
*/
function pswdGenerator() {
	let length = 8;
	let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*&^%$#@!";
	let password = [];

	for (let i = 0; i < length; i++) {
		const random = Math.floor(Math.random() * charset.length);
		password.push(charset[random]);
	}

	return password;
}

/**
 * A little more advanced, ensures that the returned pswd value will use
 * all of the possible characters we need. (which is editable)
 * @returns string
 */
function advPswdGenerator() {
	let length = 8;
	let smallcase_set = "abcdefghijklmnopqrstuvwxyz"
	let uppercase_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let number_set = "0123456789";
	let symbol_set = "*&^%$#@!";

	const finalChar = [];
	let possible_sets = [smallcase_set, uppercase_set, number_set, symbol_set];
	let prevCycle = 0;

	for (let i = 0; i < possible_sets.length; i++) {
		const random = Math.floor(Math.random() * (length - prevCycle));
		const count = (random === 0 || random > Math.floor(length / 2)) ? 1 : random;

		for (let j = 0; j < count; j++) {
			const randChar = Math.floor(Math.random() * possible_sets[i].length)
			finalChar.push(possible_sets[i][randChar]);
		}
		prevCycle = count + prevCycle;
	}

	// let possible_sets = 4;
	// let count_set = [];
	// let prevCycle = 0;
	// for (let i = 0; i < possible_sets; i++) {

	// 	const random = Math.floor(Math.random() * (length - prevCycle));
	// 	const count = (random === 0 || random > Math.floor(length / 2)) ? 1 : random;
	// 	prevCycle = count + prevCycle;
	// 	if (i === possible_sets - 1) {
	// 		console.log('IF: ', length, prevCycle)
	// 		count_set[i] = (length - prevCycle) + 1;
	// 	} else {
	// 		console.log('ELSE: ', length, prevCycle)
	// 		count_set.push(count)
	// 	}
	// }

	return finalChar.join('').toString()
}
  /** 
  * It's also possible to first generate an array of count (of charTypes)
  */
	// let possible_sets = 4;
	// let count_set = [];
	// let prevCycle = 0;
	// for (let i = 0; i < possible_sets; i++) {

	// 	const random = Math.floor(Math.random() * (length - prevCycle));
	// 	const count = (random === 0 || random > Math.floor(length / 2)) ? 1 : random;
	// 	prevCycle = count + prevCycle;
	// 	if (i === possible_sets - 1) {
	// 		console.log('IF: ', length, prevCycle)
	// 		count_set[i] = (length - prevCycle) + 1;
	// 	} else {
	// 		console.log('ELSE: ', length, prevCycle)
	// 		count_set.push(count)
	// 	}
	// }

	return finalChar.join('').toString()
}


// runner code. 
const mypswd = advPswdGenerator();
console.log(mypzwd)
