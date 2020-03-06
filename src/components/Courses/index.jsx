import React from 'react';
import './style.scss';
import {FirebaseContext} from '../../contexts/FirebaseContext';
import Button from '../../components/Button';
//import Alert from '../../components/Alert';
//import { Link } from 'react-router-dom';

export default class Courses extends React.Component{
	static contextType = FirebaseContext;
	state={
		isEnrolled: undefined
	}

	getIsEnrolled = (coursename) => {
		const {isEnrolled} = this.context
		isEnrolled(coursename).then(
			e=>{
				//alert(e)
				this.setState({isEnrolled: e})
			}
		)
	}

	enroll = () => {
		//alert("Enrolling")
		const {enroll} = this.context;
		enroll(this.state.title)
		.finally(
			() => {
				this.getIsEnrolled(this.state.title)
			}
		)
	}

	getCourseData = () =>
	{
		console.log(this.props.match.url);
		const {firestore, storage}=this.context;
		firestore
		.collection("courses")
		.where('link', '==', this.props.match.url)
		.limit(1)
		.get()
		.then(
			snapshot => {
				snapshot.forEach(
					doc => {
						if(doc.exists) {
							const data = doc.data()
							console.log(data)
							storage.refFromURL(data.subimage).getDownloadURL().then(
								url => {
									data.subimage = url
									storage.refFromURL(data.video).getDownloadURL().then(
										url => {
											data.video = url
											this.setState(
												{
													title: data.title,
													intro: data.intro,
													modules: data.modules,
													subimage: data.subimage,
													usefullinks: data.usefullinks,
													facts: data.facts,
													modulespara: data.modulespara,
													video: data.video
												}
											)
										}
									)
								}
							)
							console.log(this.state);
						}
						else console.log("No doc")
					}
				)
			}
		)
	}

	init = () => {
		this.getIsEnrolled(this.props.match.params.coursename)
		this.getCourseData()
	}

	componentDidMount() {
		this.init()
	}

	componentDidUpdate(prevProps) {
		if(prevProps.match.params.coursename !== this.props.match.params.coursename) this.init()
	}

	render() {
		console.log(this.state)
		return(

			<div className="Courses">
				<table width="100%" >
					<tr>
					<td width="70%"><h1 className="heading">{this.state.title}</h1>
					</td>
					<td width="10%"><a className="course" href="/Courses">Courses</a></td>
					<td width="20%" className="td">
					
						<Button className={this.state.isEnrolled?"enroll":""}  onClick={()=>this.enroll()}>
						{
							this.state.isEnrolled?
							"Unenroll":
							"Enroll"
						}
						<div class="tooltip">?
  <span class="tooltiptext"><br/><br/>Please enroll to view the full content</span>
</div>
						</Button>
		
						
					</td>
					</tr>
				</table>
				<div className="image">
					<img src={this.state.subimage} alt={this.state.title} height="500px" width="100%"></img>
				</div>
					
					<div class="sidebar">
						<div class="sidebar_item">
						<h3>Facts</h3>
						<ul>
						{
							this.state.facts ?
							this.state.facts.map(
								f => {
									return <li className="list">{f}</li>
								}
							):null
						}
						</ul>
            			</div>
					</div>

				<h2 className="Introduction" align="left">Introduction</h2>
				<div className="para">
					<div className="intro">
						{
							this.state.intro ?
							this.state.intro.map(
								x => {
									return <p>{x}</p>
								}
							) : null
						}
					</div>
				</div>

				{
					this.state.isEnrolled ?
					<div className="hide">
					<div className="video">
						<video className="vid" controls>
						<source src={this.state.video} type="video/mp4"></source>
						Your browser does not support the video tag.
						</video>
					</div>
					<div class="sidebar">
					<div class="sidebar_item">
						<h3>Course Links</h3>
						<ul className="sidelist">
						{
							this.state.usefullinks ? 
								this.state.usefullinks.map(
									l => {
										return (<li className="link"><a href={l.href}>{l.name}</a></li>)
									}
								):null
						}
						</ul>
					</div>
				</div>
							
						<div className="modules">
						
							<h2>Importance in today's world</h2>
							{
								this.state.modulespara ?
								this.state.modulespara.map(
									mp => {
										return (<p className="learn">{mp}</p>)
										
									}
								):null
								
							}
							<div className="moddiv">
							<br/>
							<h2>Modules covered in the course</h2>
							<ul className="mod">
								{
									this.state.modules ? 
									this.state.modules.map(
										m => {
											return (<li className="modlist">{m}<br/></li>)
										}
									):null
								}
							</ul>
							<br/>
						</div>
						</div>
						</div>
						:null
						}
					<div id="footer">
						<p>Copyright © 2020 Women Empowerment. All Rights Reserved.</p>
					</div>
				</div>
			);
	}
}

