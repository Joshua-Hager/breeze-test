import React, { Component } from 'react';
import { Table, Tab } from 'semantic-ui-react';
import PeopleList from './PeopleList';

class ResultsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          people: null,
          groups: null
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/people")
          .then(response => response.json())
          .then(data => this.setState({ people: data.data }));

          fetch("http://localhost:8000/api/group")
          .then(response => response.json())
          .then(data => this.setState({ groups: data.data }));
    }

    render() {
        let people = this.state.people || [];
        let groups = this.state.groups || [];
        const peopleComponent = <PeopleList people={people}/>

        const panes = [
          { menuItem: 'People',render: () => <PeopleList people={people}/> },
          { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
          { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ]
        
        // const TabExampleBasic = () => <Tab panes={panes} />

        return (
          <Tab panes={panes} />
    );
}

}

export default ResultsList
