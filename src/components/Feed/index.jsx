import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import './style.scss';
import Post from '../Post';

export default class Feed extends React.Component {
	static contextType = FirebaseContext

	constructor(props) {
		super(props)
		this.state = {
			posts: [],
			done: false
		}
	}

	getPostList = () => {
		if (this.props.query)
			this.props.query.orderBy('timestamp', 'desc').get().then(
				snapshot => {
					var p = []
					snapshot.forEach(
						x => {
							p.push(x.ref.path)
						}
					)
					this.setState({ posts: p, done: true })
				}
			)
		else {
			const { auth, getFollowing } = this.context
			getFollowing(auth.currentUser.uid).then(
				following => {
					var p = []
					following.forEach(
						f => {
							f
								.collection("posts")
								.orderBy("timestamp", "desc")
								.onSnapshot(
									snapshot => {
										snapshot.forEach(
											x => {
												p.push(x.ref.path)
											}
										)
										this.setState({ posts: p })
									}
								)
						}
					)
					this.setState({ done: true })
				}
			)
		}
	}

	componentDidUpdate() {
		const { auth } = this.context
		if (auth.currentUser && !this.state.done)
			this.getPostList()
	}

	render() {
		return (
			<div className="Feed">
				{
					this.state.posts.map(
						x => <Post post={x} />
					)
				}
			</div>
		)
	}
}