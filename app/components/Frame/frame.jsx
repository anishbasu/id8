var React = require('react');
var ReactDOM = require('react-dom');
var Frame = React.createClass({
	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
			);
	}	
})

export default Frame