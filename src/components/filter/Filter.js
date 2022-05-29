import React from "react";
import Button from "react-bootstrap/Button"
import { Dropdown, DropdownButton, InputGroup, FormControl } from "react-bootstrap";

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: this.props.options[0],
            searchText: ''
        }
    }

    onOptionChange = (value) => {
        this.setState({ selectedValue: value });
    }

    onSubmit = () => {
        this.props.onFilter(this.state.selectedValue, this.state.searchText);
    }

    render() {
        return (
            <div>
                <b>Filter : </b>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title={this.state.selectedValue}
                        id="selectedFilter"
                    >
                        {
                            (this.props.options || []).map(option => <Dropdown.Item id ={option} key={option} onClick={() => this.onOptionChange(option)}>{option}</Dropdown.Item>)
                        }
                    </DropdownButton>
                    <FormControl type="text" onChange={e => this.setState({ searchText: e.target.value })} value={this.state.searchText} />
                    <Button onClick={this.onSubmit}>Search</Button>
                </InputGroup>
            </div>
        );
    }
}