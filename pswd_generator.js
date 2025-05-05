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

	const finalCharArr = [];
	let possible_sets = [smallcase_set, uppercase_set, number_set, symbol_set];
	let prevCycle = 0;

	for (let i = 0; i < possible_sets.length; i++) {
		const random = Math.floor(Math.random() * (length - prevCycle));
		const count = (random === 0 || random > Math.floor(length / 2)) ? 1 : random;

		for (let j = 0; j < count; j++) {
			const randChar = Math.floor(Math.random() * possible_sets[i].length)
			finalCharArr.push(possible_sets[i][randChar]);
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

	const shuffledFinalChar = shuffleArray(finalCharArr)

	return shuffledFinalChar.join('').toString()
}


/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array} array The array to shuffle.
 */
function shuffleArray(array) {
	// Loop backwards from the last element down to the second element
	for (let i = array.length - 1; i > 0; i--) {
		// Pick a random index from 0 to i (inclusive)
		const j = Math.floor(Math.random() * (i + 1));

		[array[i], array[j]] = [array[j], array[i]];
		return array;
	}
	return array;
}


// runner code. 
const mypswd = advPswdGenerator();
console.log(mypzwd)
