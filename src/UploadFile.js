import React, {Component} from 'react';
import { render } from 'enzyme';

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFile: null
        };
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({userFile: e.target.files[0]})
    }

    render() {
        return (
            <input type="file" name="file" onChange={this.onChange}/>
        );
    }
}

export default UploadFile;