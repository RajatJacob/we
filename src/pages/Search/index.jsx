import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Input from '../../components/Input';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import UserList from '../../components/UserList';

export default class Search extends React.Component {

    static contextType = FirebaseContext;
    constructor(props) {

        super(props)
        this.state = {
            search: "",
            result: []
        }
    }

    search = text => {
        const { firestore } = this.context
        firestore
            .collection("users")
            .where("username", ">=", text)
            .where("username", "<=", text + '\uf8ff')
            .orderBy("username")
            .get()
            .then(
                snapshot => {
                    var result = [];
                    snapshot.forEach(
                        x => {
                            result.push(firestore.doc(x.ref.path))
                            this.setState({ result: result })
                        }
                    )
                    console.log(this.state.result)
                }
            )

    }

    handleSearch = e => {
        e.preventDefault();
        this.setState({ search: e.target.value, result: [] })
        const text = e.target.value
        this.search(text)
    }

    componentDidMount() {
        this.search("")
    }

    render() {
        return (
            <div className="Search">
                <div className="background">
                </div>
                <Card>
                    <Input label="Search" icon={<FontAwesomeIcon icon={faSearch} />} onChange={this.handleSearch
                    } value={this.state.search} required />
                </Card>
                <Card>
                    {
                        this.state.result.length === 0 ?
                            "No Results :)" :
                            <UserList users={this.state.result} />
                    }
                </Card>
            </div>
        )
    }
}