import React, { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";

export default class StatusSpinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.inProgress) {
            return null;
        }
        
        return (
            <div className="d-flex justify-content-center spinner" >
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

}