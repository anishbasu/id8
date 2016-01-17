require('./index.html')

var React = require('react')
import { render } from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'

import Greeting from "./components/greeting.jsx";

//My Components
import Index from "./components/index/index.jsx";
import NotFound from "./components/not_found/not_found.jsx";
import Board from "./components/board/board.jsx";
import Join from "./components/board/join/join.jsx";
import Leave from "./components/board/leave/leave.jsx";
//Set Browser History
const history = React.createClass({
	basename: '/id8'
});
//ReactDOM.render(<Greeting name="World"/>, document.getElementById("app"));


function requireJoin(nextState, replaceState){
	if(!Join.loggedIn())
		replaceState({nextPathname: nextState.location.pathname }, nextState.location.pathname+'/join')
}
render((
	<Router history={browserHistory}>
		<Route path="/" component={Index}>
			<Route path="board" component={NotFound}>
				<Route path="/:groupId" component={Board} onEnter={requireJoin}>
					<Route path="/join" component={Join}/>
					<Route path="/quit" component={Quit}/>
				</Route>
			</Route>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
), document.getElementById("app"));