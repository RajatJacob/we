
import React from 'react';
import {FirebaseContext} from '../../contexts/FirebaseContext';
import ReactDOM from 'react-dom';
import { Card } from "react-bootstrap"
import { storage } from '../../contexts/FirebaseContext';
export default class View extends React.Component {
	static contextType = FirebaseContext;
	state={
		user: {},
		done: false
	}

	getInfo = () => {
		const { firestore, auth } = this.context
		
		console.log("user")
console.log(auth.currentUser)
		if(auth.currentUser.uid)
		firestore.collection("users").doc(auth.currentUser.uid).get().then(
			doc =>
			{
				this.setState({user: doc.data(), done:true})
			}
		)
	}

	componentDidUpdate() {
		if(!this.state.done)
		this.getInfo()
	}

	render() 
	{
		return(<div>
                <Card>
                    Skills:  {this.state.user.skills}
                </Card>
				</div>
             )
        }		}