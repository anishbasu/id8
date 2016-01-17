require("./leave.sass");

var React = require('react');

var Leave = React.createClass({
	render: function(){
		return (
			<div className="greeting">
				Thanks for joining {this.state.groupId}, {this.state.username}, have a great day ahead.
			</div>
		);
	},
});

export default Leave;