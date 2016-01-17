var React = require('react');

var Greeting = React.createClass({
	render: function(){
		return (
			<div className="greeting">
				Hello, {this.props.name}!
			</div>
		);
	},
});

export default Greeting;