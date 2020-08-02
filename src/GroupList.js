import React from 'react';
import { Table } from 'semantic-ui-react';

function GroupList(props) {
    return (
        <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>Group Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

        {
            props.groups.map((group, index) => {
                return (
                    <Table.Row key={index}>
                        <Table.Cell singleLine>{ group.group_name }</Table.Cell>
                    </Table.Row>
                );
              })
        }

        </Table.Body>
      </Table>
    );
}

export default GroupList;