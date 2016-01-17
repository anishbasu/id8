require("./board.sass")

var React = require('react');
var Board = React.createClass({
	render: function(){
		return (
			<div className="board">
				Hello, {this.state.groupId}!
			</div>
		);
	},
});

export default Board;