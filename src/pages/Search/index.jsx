import React from 'react';
import './style.scss';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Input from '../../components/Input';
import { FirebaseContext } from '../../contexts/FirebaseContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Alert from '../../components/Alert';


export default class Search extends React.Component {

    static contextType = FirebaseContext;
    constructor(props) {

        super(props)
        this.state = {
            search: "",
            alert: null,
            proceed: false
        }
    }

    search = text => {
        const { firestore } = this.context
        firestore
            .collection("users")
            .where("username", ">=", text)
            .where("username", "<=", text + "")
    }

    render() {
        return (
            <div className="Search">
                <div className="background">
                </div>
                <Card>
                    <Container>
                        <Input label="Search" icon={<FontAwesomeIcon icon={faSearch} />} onChange={e => this.setState({ search: e.target.value })} value={this.state.search} required />
                        {
                            this.state.alert ?
                                <Alert type={this.state.alert.type} title={this.state.alert.title}>
                                    {this.state.alert.message}
                                </Alert> :
                                null
                        }
                    </Container>
                </Card>

            </div>
        )
    }
}