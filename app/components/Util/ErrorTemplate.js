const levels = {
		ERROR: 1,
		WARN: 2,
		SUCCESS: 3
}

function newError(level,message){
	return ({
		level: level,
		message: message
	});
}
