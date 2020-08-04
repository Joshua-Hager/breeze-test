import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import PeopleRow from './PeopleRow';

class PeopleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            people: props.people,
            groups: props.groups
        }
    }

    render() {
      return (
        <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell singleLine>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <Table.HeaderCell>Group</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            <Table.Body>

            {
                this.state.people.map((person, index) => {
                    return (
                        <PeopleRow
                            key={index}
                            index={index}
                            person={person}
                            groupList={this.state.groups}
                        />
                    );
                    })
            }

            </Table.Body>
        </Table>
      );
    }
}

export default PeopleList;