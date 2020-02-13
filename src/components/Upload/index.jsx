import React, {
    Component
} from 'react';
export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: null,
            url: ''

        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange = e => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            this.setState(() => ({ file }));
        }
    }

    render() {
        return (<div >
            <input type="file" onChange={this.handleChange} />
        </div>
        );
    }
}