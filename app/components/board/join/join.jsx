require("./join.sass")
require("../auth/auth.js")
import ReactFireMixin from "reactfire"
var React = require('React');

const Join = React.createClass({
	mixins: []
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	handleSubmit: function (event) {
		 event.preventDefault();
		 const username = this.refs.username.value;


	}
	render: function(){
		return (
			<div className="joinBox">
				<h3>You're joining {this.props.groupId} as: </h3>
				<form onSubmit={this.handleSubmit}>
					<input ref="username" type="text" placeholder="Your Name" defaultValue="Anonymous" />
					<button type="submit" className="submit_btn">
				</form>
			</div>
		);
	},
});

export default Join;