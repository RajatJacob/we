import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import './style.scss';
import Post from '../Post';
import Loader from '../Loader';
import { Redirect } from 'react-router-dom';

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
		const { auth, getFollowing } = this.context
		if (!auth.currentUser) return
		this.setState(
			{
				posts: [],
				done: false
			}
		)
		if (this.props.query === "feed") {
			getFollowing(auth.currentUser.uid).then(
				following => {
					console.log(following)
					following.forEach(
						f => {
							var p = []
							f
								.collection("posts")
								.orderBy("timestamp", "desc")
								.get()
								.then(
									snapshot => {
										snapshot.forEach(
											x => {
												p.push(x.ref.path)
												this.setState({ posts: p })
											}
										)
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
	componentDidMount() {
		this.getPostList()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.query !== this.props.query) {
			this.getPostList()
		}
	}

	render() {
		const { auth } = this.context
		if (!auth.currentUser) return (
			<Redirect to="/login" />
		)
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