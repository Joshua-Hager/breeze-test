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
    groupSelection(event, data, person_id) {
        // console.log(event, data, person_id);
        // console.log('I Liiiiiiiiiive')
        // props.selectedGroup(event, data, person_id)
        // fetch('http://localhost:8000/api/people', {
        //       method: 'POST',
        //       headers: {
        //       'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify(result),
        //   })
        //   .then(response => response.json())
        //   .then(data => {
        //       console.log('Success:', data);
        //   })
        //   .catch((error) => {
        //       console.error('Error:', error);
        //   })
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
                        onChange={this.groupSelection()}
                        options={this.state.groups}
                    />
            </Table.Cell>
            </Table.Row>
            );
    }
}

export default PeopleRow;