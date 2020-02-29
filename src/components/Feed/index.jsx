import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import './style.scss';
import Post from '../Post';
import Loader from '../Loader';

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
		if (this.props.query === "feed") {
			const { auth, getFollowing } = this.context
			getFollowing(auth.currentUser.uid).then(
				following => {
					var p = []
					following.forEach(
						f => {
							f
								.collection("posts")
								.orderBy("timestamp", "desc")
								.get()
								.then(
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
		else if (this.props.query)
			this.props.query
				.orderBy('timestamp', 'desc')
				.get()
				.then(
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
	}

	render() {
		const { auth } = this.context
		if (auth.currentUser && !this.state.done)
			this.getPostList()
		return (
			<div className="Feed">
				{
					this.state.done ?
						this.state.posts.length === 0 ?
							"No posts" :
							this.state.posts.map(
								x => <Post post={x} />
							) :
						<Loader />
				}
			</div>
		)
	}
}