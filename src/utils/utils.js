const validateName = (name) => {
	return /^[a-z]+$/i.test(name);
}

const validateEmail = (email) => {
	return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

export {validateEmail, validateName};