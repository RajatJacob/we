import React from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import './style.scss';
import Container from '../Container';

export default class Post extends React.Component {
	static contextType = FirebaseContext

	constructor(props) {
		super(props)
		this.state = {
			post: {}
		}
		this.prevProp = null
	}

	getPostData = () => {
		const { firestore } = this.context
		firestore
			.doc(this.props.post)
			.get()
			.then(
				doc => {
					console.log(doc)
					if (doc.exists) {
						this.setState(
							{
								post: doc.data()
							}
						)
					}
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
			</div>
		)
	}
}