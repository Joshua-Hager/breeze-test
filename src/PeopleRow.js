import React, {Component} from 'react';
import { Table, Dropdown } from 'semantic-ui-react';

class PeopleRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            person: props.person,
            index: props.index,
            groups: props.groupList.map(group => {
                return {
                  text: group.group_name,
                  value: group.id
                }
              })
        }
    }
    groupSelection(event, data) {
        console.log(event, data);

        fetch(`http://localhost:8000/api/people/${this.state.person.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    group_id: data.value
                }),
          })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
          })
            .catch((error) => {
                console.error('Error:', error);
          })
      }

    render() {
        return (
            <Table.Row key={this.state.index}>
                <Table.Cell singleLine>{ this.state.person.first_name }</Table.Cell>
                <Table.Cell singleLine>{ this.state.person.last_name }</Table.Cell>
                <Table.Cell singleLine>{ this.state.person.email_address }</Table.Cell>
                <Table.Cell singleLine>{ this.state.person.status }</Table.Cell>
                <Table.Cell singleLine>
                    <Dropdown
                        placeholder='Group'
                        search
                        selection
                        defaultValue={this.state.person.group_id}
                        onChange={(event, data) => this.groupSelection(event, data)}
                        options={this.state.groups}
                    />
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default PeopleRow;