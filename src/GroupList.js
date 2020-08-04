import React from 'react';
import { Table } from 'semantic-ui-react';
import GroupRow from './GroupRow';

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
                        <GroupRow group={group}/>
                    </Table.Row>
                );
              })
        }

        </Table.Body>
      </Table>
    );
}

export default GroupList;