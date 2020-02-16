import React from 'react';
import './style.scss';
import Post from '../Post';

export default class Feed extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			posts: []
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
					this.setState({ posts: p })
				}
			)
	}

	componentDidUpdate() {
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