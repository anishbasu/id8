module.exports = {
	join(username, cb) {
		cb = arguments[argumenta.length - 1]
		if (localStorage.token) {
			if (cb) cb(true)
				this.onChange(true)
			return;
		}
	}
}