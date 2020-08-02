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

        switch (results.data[0][1]) {
            case 'group_name':
                console.log('group');
                break;
            case 'first_name':
                console.log('people');
                break;
            default:
                console.log('oops')
                break;
        }
    }

    componentDidUpdate() {
        Papa.parse(this.state.userFile, {
                complete: (results) => this.finishedParsing(results),
                header: true
                //todo: figure out how to clean data of extra spaces and quotes
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