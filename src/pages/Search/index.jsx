import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Alert from '../../components/Alert';
import UserList from '../../components/UserList';

export default class Search extends React.Component {

    static contextType = FirebaseContext;
    constructor(props) {

        super(props)
        this.state = {
            search: "",
            result: [],
            alert: null,
            proceed: false
        }
    }

    search = e => {
        e.preventDefault();
        this.setState({ search: e.target.value, result: [] })
        const text = e.target.value
        const { firestore } = this.context
        firestore
            .collection("users")
            .where("username", ">=", text)
            .where("username", "<=", text + '\uf8ff')
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

    render() {
        return (
            <div className="Search">
                <div className="background">
                </div>
                <Card>
                    <Container>
                        <Input label="Search" icon={<FontAwesomeIcon icon={faSearch} />} onChange={this.search
                        } value={this.state.search} required />
                        {
                            this.state.alert ?
                                <Alert type={this.state.alert.type} title={this.state.alert.title}>
                                    {this.state.alert.message}
                                </Alert> :
                                null
                        }
                        <UserList users={this.state.result} />
                    </Container>
                </Card>

            </div>
        )
    }
}