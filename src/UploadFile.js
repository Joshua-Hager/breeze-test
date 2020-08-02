import React, {Component} from 'react';
import Papa from 'papaparse';

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFile: null,
            fileData: null
        };
        this.onChange = this.onChange.bind(this)
    }

    finishedParsing(results) {
        console.log(results)
    }

    componentDidUpdate() {
        Papa.parse(this.state.userFile, {
                complete: (results) => this.finishedParsing(results)
            });
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