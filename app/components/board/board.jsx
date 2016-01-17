require("./board.sass")
import {ReactFireMixin} from 'reactfire'
var Firebase = require('firebase');
var React = require('react');
var Board = React.createClass({
	mixins: [ReactFireMixin],
	componentWillMount: function(){
		var datastore = new FireBase("https://id8.firebaseio.com/web/data");
		var group = datastore.child('groups/'+this.state.groupID);
		this.bindAsArray(group.child('ideas'),"ideas");
	},
	render: function(){
		return (
			<div className="board">
				{
					this.state.ideas.map(
							function(object){
								<Idea idea={object}/>
							}
						)
				}
			</div>
		);
	},
});

var Idea = React.createClass({
	render: function(){
		return(
			<div className="idea_item">
				<div className="title">{this.props.idea.title}</div>
				<div className="text">{this.props.idea.text}</div>
				<div className="voting">
					<a onClick={this.handleVoting(true, this.props.idea.id)}>
						<div className="upArrow"></div>
					</a>
					<a onClick={this.handleVoting(false, this.props.idea.id)}>
						<div className="downArrow"></div>
					</a>
				</div>
				<div className="bottomText">
					
				</div>
			</div>
			);
	}
});

export default Board;