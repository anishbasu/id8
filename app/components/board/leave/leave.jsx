require("./leave.sass");

var React = require('react');

var Leave = React.createClass({
	render: function(){
		return (
			<div className="greeting">
				Thanks for joining, {this.state.groupId}, have a great day.
				
			</div>
		);
	},
});

export default Leave;