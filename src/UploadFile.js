import React, {Component} from 'react';
import Papa from 'papaparse';
import { Input, Segment } from 'semantic-ui-react';

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFile: null,
            fileData: null
        };
        this.onChange = this.onChange.bind(this)
    }

    determineType(result_object) {
        if (result_object.hasOwnProperty('group_name')) {
                return 'group';
            }
        return 'people';
    }

    componentDidUpdate() {
        Papa.parse(this.state.userFile, {
                complete: (results => results.data.map(
                    result => {
                        let endpointType = this.determineType(result)
                        fetch(`http://localhost:8000/api/${endpointType}`, {
                            method: 'POST',
                            headers: {
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(result),
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        })
                    }
                  )),
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
            <Segment>
                <Input
                    label='Upload CSV File'
                    placeholder='Select File'
                    type="file"
                    accept=".csv"
                    onChange={this.onChange}
                />
            </Segment>
        );
    }
}

export default UploadFile;