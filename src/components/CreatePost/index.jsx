import React from 'react'
import './style.scss'
import Card from '../Card'
import Container from '../Container'
import Input from '../Input'
import { Redirect } from 'react-router-dom'
import { FirebaseContext } from '../../contexts/FirebaseContext'

export default class CreatePost extends React.Component {
	static contextType = FirebaseContext

	state = {
		done: false,
		uploading: false,
		img: {}
	}

	inputChanged = e => this.setState({ [e.target.name]: e.target.value })
	imgChanged = e => this.setState({ img: { file: e.target.files[0], value: e.target.value, path: e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : null } })

	post = post => {
		const { firestore, auth } = this.context
		firestore
			.collection("users")
			.doc(auth.currentUser.uid)
			.collection("posts")
			.add(post)
			.finally(
				() => this.setState({ uploading: false, done: true })
			)
	}

	submit = e => {
		e.preventDefault()
		if (
			this.state.uploading ||
			!this.state.title ||
			!this.state.content ||
			!this.state.caption
		) return
		const { firestoreTimestamp, storage, auth } = this.context
		var post = {}
		this.setState({ uploading: true })
		if (this.state.title) post["title"] = this.state.title
		if (this.state.caption) post["caption"] = this.state.caption
		if (this.state.content) post["content"] = this.state.content
		post["timestamp"] = firestoreTimestamp.now()
		if (!this.state.img.file) {
			this.post(post)
		}
		else {
			const ext = this.state.img.value ? this.state.img.value.substring(this.state.img.value.lastIndexOf('.')) : null
			const fileName = Date.now().toString() + ext
			const storageRef = storage.ref()
			const imgRef = storageRef
				.child("posts")
				.child(auth.currentUser.uid)
				.child(fileName)
			imgRef
				.put(this.state.img.file)
				.then(
					snapshot => {
						snapshot.ref.getDownloadURL().then(
							imgRef.getDownloadURL().then(
								url => {
									post["img"] = url
								}
							)
								.finally(
									() => {
										this.post(post)
									}
								)
						)
					}
				)
		}
	}

	render() {
		const { auth } = this.context
		if (!auth.currentUser) return (
			<Redirect to="/login" />
		)
		if (this.state.done) return (
			<Redirect to={"/user/" + auth.currentUser.displayName} />
		)
		return (
			<div className="CreatePost">
				<div className="background"></div>
				<Card>
					<h1>New Post</h1>
					<Container>
						<form onSubmit={this.submit}>
							<input type="text" name="title" placeholder="Title" onChange={this.inputChanged} value={this.state.title} />
							{
								this.state.img.path ?
									<img className="uploaded" src={this.state.img.path} alt="Uploaded" /> : null
							}
							<input type="file" name="img" onChange={this.imgChanged} value={this.state.img.value} />
							<input type="text" name="caption" placeholder="Caption" onChange={this.inputChanged} value={this.state.caption} />
							<textarea name="content" placeholder="Content" onChange={this.inputChanged} value={this.state.content} />
							<Container>
								<Input type="submit" label={this.state.uploading ? "Posting..." : "Post"} onClick={this.submit} />
							</Container>
						</form>
					</Container>
				</Card>
			</div>
		)
	}
}