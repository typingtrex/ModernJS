// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

const isValidPassword = (pass, userName) => {
  const isLongEnough = (pass) => {
    // should return true or false
    return pass.length >= 8;
  };
  const doesNotHaveSpaces = (pass) => {
    for (let i = 0; i < pass.length; i++) {
      if (pass[i] === ' ') {
        return false;
      }
    }
    return true;
  };
  const doesNotIncludeUserName = (pass, userName) => {
    return !pass.includes(userName);
  };

  return (
    isLongEnough(pass) &&
    doesNotHaveSpaces(pass) &&
    doesNotIncludeUserName(pass, userName)
  );
};

// console.log('should be true: ', isValidPassword('89Fjj1nms', 'dogLuvr')); //true
console.log('should be false: ', isValidPassword('dogLuvr123!', 'dogLuvr')); //false
// isValidPassword('hello1', 'dogLuvr') //false

// ------ solutions from Udemy -------------
/*
function isValidPassword(password, username) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

function isValidPassword(password, username) {
	if (
		password.length < 8 ||
		password.indexOf(' ') !== -1 ||
		password.indexOf(username) !== -1
	) {
		return false;
	}
	return true;
}

function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hasSpace || tooSimilar) return false;
	return true;
}

function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (!tooShort && !hasSpace && !tooSimilar) return true;
	return false;
}

function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	return !tooShort && !hasSpace && !tooSimilar;
}

*/
