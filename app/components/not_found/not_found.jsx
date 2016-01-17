require("./not_found.sass");
var React = require('react');

var NotFound = React.createClass({
	render: function(){
		return (
			<div className="board">
				"I still haven't found what I'm looking for" - Bono
			</div>
		);
	},
});

export default NotFound;
