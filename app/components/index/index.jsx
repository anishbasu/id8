//index.jsx
require('./index.sass');
import {Link} from 'react-router'
var React = require('react')

var Index = React.createClass({
	contextTypes: {
		router: React.PropTypes.func.isRequired
	},

	getInitialState: function(){
		return ({
			joined: auth.joined()
		})
	},


	updateAuth: function(joined) {
		this.setState({
			joined: joined
		})
	},

	componentWillMount: function() {
		auth.onChange = this.updateAuth;
		auth.join()
	},

	handleSubmit: function(){
		event.preventDefault()
		const group = this.refs.groupname.value;

		router.push('board/'+group+'/join');

	},

	render: function(){
		return (
			<div>
				<h1>id8 (pronounced: ideate) making brainstrorming easier)</h1>
				<h3>To join or create a group, type it's name:</h3>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="(Example: Annie's Group)" ref="groupname"/>
					<input type="submit" className="submit_btn"/>
				</form>
			</div>
			);
	}
});

export default Index;