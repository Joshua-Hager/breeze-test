import React from 'react';
import { Table, Dropdown } from 'semantic-ui-react';

function PeopleList(props) {
  let groupList = props.groups.map(group => {
    return {
      text: group.group_name,
      value: group.id
    }
  })

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
            props.people.map((person, index) => {
              let group_id = person.group_id
                return (
                    <Table.Row key={index}>
                        <Table.Cell singleLine>{ person.first_name }</Table.Cell>
                        <Table.Cell singleLine>{ person.last_name }</Table.Cell>
                        <Table.Cell singleLine>{ person.email_address }</Table.Cell>
                        <Table.Cell singleLine>{ person.status }</Table.Cell>
                        <Table.Cell singleLine><Dropdown
                          placeholder='Group'
                          search
                          selection
                          defaultValue={group_id}
                          options={groupList} />
                        </Table.Cell>
                    </Table.Row>
                );
              })
        }

        </Table.Body>
      </Table>
    );
}

export default PeopleList;