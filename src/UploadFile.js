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

    componentDidUpdate() {
        Papa.parse(this.state.userFile, {
                complete: (results) => this.finishedParsing(results),
                header: true,
                transformHeader: (header, index) => {
                    header = header.trim()

                    return header
                },
                transform: (input, field) => {
                    input = input.trim()

                    let index
                    while ((index = input.indexOf('"')) !== -1 ) {
                        input = input.replace('"', '')
                    }

                    return input
                }
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