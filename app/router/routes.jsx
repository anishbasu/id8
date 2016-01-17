var React = require('react');
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//My Components
import Index from "../components/index/index.jsx";
import NotFound from "../components/not_found/not_found.jsx";
import Board from "../components/board/board.jsx";
import Join from "../components/board/join/join.jsx";
import Leave from "../components/board/leave/leave.jsx";
import Frame from "../components/Frame/frame.jsx"

function requireJoin(nextState, replaceState){
	if(!Join.loggedIn())
		replaceState({nextPathname: nextState.location.pathname }, nextState.location.pathname+'/join')
}


module.exports = (
	<Router history={browserHistory}>
	<Route path="/" component={Frame}>
		<IndexRoute component={Index}/>
		<Route path="board" component={Frame}>
			<IndexRoute component={NotFound}/>
			<Route path=":groupID" component={Frame}>
				<IndexRoute component={Board} onEnter={requireJoin}/>
				<Route path="join" component={Join}/>
				<Route path="leave" component={Leave}/>
				<Route path="members" component={Frame}>
					<IndexRoute component={GroupMembers}/>
					<Route path=":usrID" component={ViewMember}/>
				</Route>
			</Route>
		</Route>
	</Route>
	<Route path="*" component={NotFound}/>
	</Router>
);