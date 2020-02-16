import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { Link } from 'react-router-dom';
import './style.scss';
import Container from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';

export default class Post extends React.Component {
	static contextType = FirebaseContext

	constructor(props) {
		super(props)
		this.state = {
			post: {},
			authorId: this.props.post.split('/')[1]
		}
		this.prevProp = null
	}

	getPostData = () => {
		const { firestore } = this.context
		firestore
			.doc(this.props.post)
			.onSnapshot(
				snapshot => {
					this.setState(
						{
							post: snapshot.data()
						}
					)
					this.getAuthorData()
					this.getTimeSincePost()
				}
			)
	}

	getAuthorData = () => {
		const { firestore } = this.context
		firestore
			.collection("users")
			.doc(this.state.authorId)
			.onSnapshot(
				snapshot => {
					this.setState(
						{
							author: snapshot.data()
						}
					)
				}
			)
	}

	getTimeSincePost = () => {
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
				timeStr = time[x] === 0 ? timeStr : time[x] + x
			}
		)
		this.setState(
			{
				timeSince: timeStr
			}
		)
	}

	componentDidUpdate() {
		if (this.props.post !== this.prevProp) {
			this.prevProp = this.props.post
			this.getPostData()
		}
	}

	render() {
		return (
			<div className="Post">
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
					{
						this.state.timeSince ?
							<div className="timeSince">
								{this.state.timeSince}
							</div> : null
					}
				</div>
				{
					this.state.post.img ?
						<div className="picture">
							{
								this.state.post.img ?
									<img src={this.state.post.img} alt={this.state.post.caption || this.state.post.title || null} /> :
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
							{this.state.post.content}
						</Container> : null
				}
				<div className="reactions">
					<div>
						<span class="icon">
							<FontAwesomeIcon icon={faHeart} />
						</span>
						Like
					</div>
					<div>
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
					</div>
				</div>
			</div >
		)
	}
}