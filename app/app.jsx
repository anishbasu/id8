require('./index.html')

var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./router/routes.jsx')

function requireJoin(nextState, replaceState){
	if(!Join.loggedIn())
		replaceState({nextPathname: nextState.location.pathname }, nextState.location.pathname+'/join')
}
ReactDOM.render(<Routes/>, document.getElementById('app'));
/*
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

function requireJoin(nextState, replaceState){
	if(!Join.loggedIn())
		replaceState({nextPathname: nextState.location.pathname }, nextState.location.pathname+'/join')
}
render((
	<Router history={browserHistory}>
	<Route path="/" component={Index}/>
	<Route path="board/:groupID" component={Board} onEnter={requireJoin}/>
	<Route path="board/:groupID/join" component={Join}/>
	<Route path="board/:groupID/leave" component={Leave}/>
	<Route path="board/:groupID/members" component={GroupMemberList}/>
	<Route path="board/:groupID/members/:usrID" component={ViewMember}/>
	<Route path="*" component={NotFound}/>
	</Router>
), document.getElementById("app"));
*/