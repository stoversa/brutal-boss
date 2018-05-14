import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm'
import Header from './components/Header'
import Home from './components/Home'
import MeetingDetail from "./components/Meetings/MeetingDetail";
import MeetingStats from './components/Meetings/MeetingStats'
import MeetingMainMenu from './components/Meetings/MeetingMainMenu'
import CurrentMeeting from './components/Meetings/CurrentMeeting/CurrentMeeting'
import Chat from "./components/Chat/Chat";
import { slide as Menu } from 'react-burger-menu';


const DisplayLinks = props => {
	if (props.loggedIn) {
		return (

			<Menu>
				<a className="menu-item" href="/">Home</a>
				<a className="menu-item" href="/meetings">Meeting</a>
				<a className="menu-item" href="/meeting-stats">Meeting Stats</a>
				<a className="menu-item" onClick={props._logout}>Logout</a>
			</Menu>

		)
	} else {
		return (

			<div>
				<Menu>
					<a className="menu-item" href="/">Home</a>
					<a className="menu-item" href="/login">Login</a>
					<a className="menu-item" href="/signup">Sign Up</a>
				</Menu>
			</div>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">
			<Header user={this.state.user} />

				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				
				<Route exact path="/" 
					render={() => 
						<Home 
							user={this.state.user} />} 
						/>
				<Route 
					exact path="/meetings" 
					render={() => 
						<MeetingMainMenu 
							user={this.state.user} />} 
						/>
				<Route 
					exact path="/meeting-stats" 
					render={() => 
						<MeetingStats 
							user={this.state.user} />} 
						/>
				<Route 
					exact path="/meeting-details" 
					component={MeetingDetail} 
					/>
				<Route
					path="/current"
					render={() =>
						<CurrentMeeting
							user={this.state.user} />}
				/>
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />

				<div className="globalChat">
					<Chat />
				</div>
			</div>
		)
	}
}

export default App
