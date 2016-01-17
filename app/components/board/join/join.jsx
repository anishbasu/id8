require("./join.sass")
require("../auth/auth.js")
import ReactFireMixin from "reactfire"
var React = require('React');
var throwing = require('../../Util/ErrorTemplate.js')


const Join = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function () {
		 return {
		 	errors: []
		 }
	},
	handleSubmit: function (event) {
		 event.preventDefault();

		 const username = this.refs.username.value;
		 const group = this.state.groupID;


		 auth.login(username, group, (joined) => {
		 	if(!joined){
		 		var errors = this.state.errors;
		 		errors.push(throwing.newError(throwing.ERROR_LEVELS.ERROR, "Could not connect to the internet"));
		 		return this.setState({error: errors});
		 	}
		 });

	},

	render: function(){
		return (
			<div className="joinBox">
				<h3>You're joining {this.props.groupID} as: </h3>
				<form onSubmit={this.handleSubmit}>
					<input ref="username" type="text" placeholder="Your Name" defaultValue="Anonymous" />
					<button type="submit" className="submit_btn"/>
				</form>
			</div>
		);
	},
});

var ErrorPanel = React.createClass({
	render: function(){
		return (
			<div>
				{this.props.errors.map(
					function (object){
						<Error level={object.level} message={object.message}/>
					}
				)}
			</div>
			);
	},

});

var Error = React.createClass({
	render: function(){
		return (
			<div className={throwing.this.props.level}>{this.props.message}</div>
			)
	}
})
export default Join;