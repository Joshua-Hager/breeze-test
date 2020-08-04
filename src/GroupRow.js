import React, { Component } from "react";
import { Table, Accordion, Icon, AccordionTitle, AccordionContent } from 'semantic-ui-react';

class GroupRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            group: props.group,
            index: props.index,
            activeIndex: 0
        }
    }

    //taken from Semantic UI docs
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
      }

    render() {
        return (
            <Table.Cell singleLine>
                <Accordion>
                    <AccordionTitle 
                        active={this.state.activeIndex === this.state.index}
                        index={this.state.index}
                        onClick={this.handleClick}
                    >
                        <Icon name='dropdown'/>
                        {this.state.group.group_name}
                    </AccordionTitle>
                    <AccordionContent
                        active={this.state.activeIndex === this.state.index}
                    >
                        <p>Hi</p>
                    </AccordionContent>
                </Accordion>
            </Table.Cell>
        );
    }
}

export default GroupRow