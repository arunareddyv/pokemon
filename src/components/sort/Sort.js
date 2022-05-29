import React from "react";
import { Dropdown, DropdownButton, InputGroup, FormControl } from "react-bootstrap";

export default class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: "Slect Sort type"
        }
    }
    onOptionChange = (value) => {
        this.setState({ selectedValue: value });
        this.props.onOptionChange(value);
    }
    render() {
        return (
            <div>
                <b>Sort By :</b>
                {
                    this.props.options &&
                    <InputGroup className="mb-3">
                        <DropdownButton
                            variant="outline-secondary"
                            title={this.state.selectedValue}
                            id="input-group-dropdown-1"
                        >
                            {
                                (this.props.options || []).map(option => <Dropdown.Item key={option} onClick={() => this.onOptionChange(option)}>{option}</Dropdown.Item>)
                            }

                        </DropdownButton>
                    </InputGroup>

                }
            </div>
        );
    }
}
