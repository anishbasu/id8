//index.jsx
require('./index.sass');
import {Link} from 'react-router'
var React = require('react')

var Index = React.createClass({
	getInitialState: function(){
		return {
			joined: auth.joined();
		}
	},
	render: function(){
		return (
			<div>
				<h1>id8 (pronounced: ideate) helps your team settle on a greqat idea.</h1>
				<h3>To join or create a group, type it's name:</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="(Example: Annie's Group)" ref="groupname"/>
					<input type="submit" className="submit_btn">
				</form>
			</div>
			);
	}
});

export default Index;