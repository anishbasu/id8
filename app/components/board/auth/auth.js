var Firebase = require('firebase');
var datastore = new Firebase("https://id8.firebaseio.com/web/data");
module.exports = {

	join(username, group, cb) {
		cb = arguments[argument.length - 1]
		if (localStorage.token) {
			if (cb) cb(true)
				this.onChange(true)
			return
		}
		
		joinGroup(username, group, (res) => {
			if (res.authenticated) {
				localStorage.token = res.token
				localStorage.setItem('id8', JSON.stringify(res))
				if(cb) cb(true)
					this.onChange(true)
			} else {
				if(cb) cb(false)
					this.onChange(false);
			}
		});
	},

	getToken(){
		return localStorage.token;
	},

	leave(cb){
		delete localStorage.token;
		localStorage.removeItem(key);
		if(cb) cb()
			this.onChange(false)
	},

	joined(){
		return !!localStorage.token;
	},

	onChange() {}
}
function joinGroup(username, group, cb) {
	var group_store = datastore.child('groups/'+group);
	var stored_data = localStorage.getItem('id8');
	var timestamp = Firebase.ServerValue.TIMESTAMP;
	if(stored_data!=null){
		var localData = JSON.parse(stored_data);
		if(!!(localData['groups'].indexOf(group)+1)){
			cb({
				joined: true,
				token: localData['token']
			})
		} else {
			cb({
				joined: true,
				token: localData['token']
			})
			//Add to message board
			group_store.child("members/"+localData['usr']+'/'+token).set(
			{
				username: localData['username'],
				upvotes: 0,
				downvotes: 0,
				token: localData['token'],
				usr: localData['username']
			});
			// Add timeStamp to localstorage
			localData['timestamp'] = timestamp;
			localData['groups'].push(group);

			//Add the cookie to local storage
			localStorage.setItem('id8',localData);
		}
	}

	var usr = username.replace(/[\s!\.?<>()@]+/, "");

	var token = Math.random().toString(36).substring(7)
	if(stored_data==null) {
		cb({
			joined: true,
			token: token
		});
		group_store.child("members/"+usr+"/"+token).set({
			username: username,
			upvotes: 0,
			downvotes: 0,
			token: token,
			ideas_proposed: []
		});
		localStorage.setItem('id8',{
			token: token,
			groups: [group],
			timestamp: timestamp,
			username: username,
			usr: usr,
		});
	}

}
