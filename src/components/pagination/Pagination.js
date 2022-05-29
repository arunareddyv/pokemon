import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
import './Pagination.css';
import { Col, Row } from 'react-bootstrap';

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);

    }

    onOptionChange = (value) => {
        this.props.data.selectedValue = value
        this.props.onPageCountSelect(value);
    }
    render() {
        if (!this.props.data) {
            return null;
        }
        return (
            <div className="text-center mt-3">
                <Row>
                    <Col>
                        <Button className='bg-light text-primary Page-action-btn'  onClick={this.props.onPrevious} disabled={!this.props.data.hasPrevious}>Previous</Button>
                        <Dropdown className='Pagination-count'>
                            <Dropdown.Toggle id="dropdown-basic">
                                {this.props.data.selectedValue}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    (this.props.data.options || []).map(option => <Dropdown.Item key={option} onClick={() => this.onOptionChange(option)}>{option}</Dropdown.Item>)
                                }

                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className='bg-light text-primary Page-action-btn' type='submit'  onClick={this.props.onNext} disabled={!this.props.data.hasNext}>Next {this.props.data.hasNext}</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}