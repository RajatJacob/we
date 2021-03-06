import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link } from 'react-router-dom';
import './style.scss';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

export default class Post extends React.Component {
	static contextType = FirebaseContext

	constructor(props) {
		super(props)
		this.state = {
			post: {},
			menu: false
		}
	}

	toggleMenu = e => {
		this.setState({ menu: !this.state.menu })
	}

	getPostData = () => {
		const { firestore } = this.context
		this.setState(
			{
				unsubscribe:
					firestore
						.doc(this.props.post)
						.onSnapshot(
							snapshot => {
								this.setState(
									{
										post: snapshot.data(),
										authorId: this.props.post.split('/')[1]
									}
								)
								this.getAuthorData()
								this.getTimeSincePost()
							}
						)
			}
		)
	}

	getAuthorData = () => {
		const { firestore, auth } = this.context
		if (this.state.authorId)
			firestore
				.collection("users")
				.doc(this.state.authorId)
				.get()
				.then(
					snapshot => {
						this.setState(
							{
								author: snapshot.data(),
								self: this.state.authorId === auth.currentUser.uid
							}
						)
					}
				)
	}

	getTimeSincePost = () => {
		if (!this.state.post) return
		var t = this.state.post.timestamp ? (Math.floor(Date.now()) / 1000 - this.state.post.timestamp.seconds) : 0
		var time = {}
		time.s = t
		time.m = Math.floor(time.s / 60)
		time.h = Math.floor(time.m / 60)
		time.d = Math.floor(time.h / 24)
		time.w = Math.floor(time.d / 7)
		time.mo = Math.floor(time.d / 30)
		time.y = Math.floor(time.d / 365)
		time.m %= 60
		time.h %= 24
		time.d %= 7
		time.w %= 4
		time.mo %= 12
		var timeStr = ""
		Object.keys(time).forEach(
			x => {
				timeStr = time[x] === 0 ? timeStr : time[x].toFixed(0) + x
			}
		)
		this.setState(
			{
				timeSince: timeStr
			}
		)
	}

	doesLike = () => {
		const { auth } = this.context
		const u = auth.currentUser.uid
		var l = false
		if (this.state.post.likedBy)
			this.state.post.likedBy.forEach(
				x => l = l || x === u
			)
		return l
	}

	like = () => {
		const { firestore, auth } = this.context
		const u = auth.currentUser.uid
		var l = this.state.post.likedBy || []
		var i = 0
		if (this.doesLike()) { //unlike
			if (this.state.post.likedBy)
				while (i !== -1) {
					i = l.indexOf(u)
					if (i !== -1) l.splice(i, 1)
				}
		}
		else // like
			l.push(auth.currentUser.uid)
		firestore
			.doc(this.props.post)
			.update(
				{
					likedBy: l
				}
			)
	}

	delete = () => {
		const { firestore } = this.context
		firestore.doc(this.props.post).delete().then(
			() => this.setState({ menu: false })
		)
	}

	linkify = text => {
		var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
		var regex = new RegExp(expression);
		let parts = text.split(regex)
		for (let i = 1; i < parts.length; i += 2) {
			parts[i] = <a className="contentLink" key={'link' + i} href={parts[i]} target="_blank" rel="noopener noreferrer">{parts[i]}</a>
		}
		return parts
	}

	init = () => {
		this.getPostData()
	}

	componentDidMount() {
		this.init()
	}

	componentDidUpdate(prevProps) {
		if (this.props.post !== prevProps.post)
			this.init()
	}

	componentWillUnmount() {
		this.state.unsubscribe()
	}

	render() {
		if (!this.state.post) return null
		else return (
			<div className="Post" onDoubleClick={this.like}>
				<div className="info">
					{
						this.state.author ?
							<Link to={"/user/" + this.state.author.username} className="author">
								<img src={this.state.author.photoURL} alt={this.state.author.username} className="profilePicture" />
								<div className="username">
									{"@" + this.state.author.username}
								</div>
							</Link> :
							null
					}
					<div className="action">
						{
							this.state.timeSince ?
								<div className="timeSince" title={
									new Date(
										this.state.post.timestamp.seconds * 1000
									).toString()
								}>
									{this.state.timeSince}
								</div> : null
						}
						{
							this.state.self ?
								<span className="toggleMenu" onClick={this.toggleMenu}>
									<FontAwesomeIcon icon={faEllipsisV} />
								</span> : null
						}
					</div>
				</div>
				{
					this.state.self ?
						<div className={this.state.menu ? "active menu" : "menu"}>
							<ul>
								<li className="Delete" onClick={this.delete}>Delete</li>
							</ul>
						</div> :
						null
				}
				{
					this.state.post.img ?
						<div className="picture">
							{
								this.state.post.img ?
									<img src={this.state.post.img} alt={this.state.post.caption || this.state.post.title || "Photo"} /> :
									null
							}
							{
								this.state.post.caption ?
									<div className="caption">
										{this.state.post.caption}
									</div> : null
							}
						</div> : null
				}
				{
					(this.state.post.title || this.state.post.content) ?
						<Container>
							<h3>{this.state.post.title}</h3>
							{this.linkify(this.state.post.content || "")}
						</Container> : null
				}
				<div className="reactions">
					<div onClick={this.like} className={this.doesLike() ? "liked" : undefined}>
						<span className="number">
							{
								this.state.post.likedBy ? this.state.post.likedBy.length : 0
							}
						</span>
						<span className="icon">
							<FontAwesomeIcon icon={
								this.doesLike() ?
									faHeart :
									farHeart
							} />
						</span>
					</div>
					{/*<div>
						<span class="icon">
							<FontAwesomeIcon icon={faComment} />
						</span>
						Comment
					</div>
					<div>
						<span class="icon">
							<FontAwesomeIcon icon={faShare} />
						</span>
						Share
					</div>*/}
				</div>
			</div >
		)
	}
}