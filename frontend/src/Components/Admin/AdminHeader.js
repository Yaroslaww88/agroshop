import React from 'react'
import {
  Row, Col, Button
} from 'reactstrap'

const AdminHeader = ({ handleLogout }) => {

    return (
        <Row>
            <Col>
                <h1>Hello from admin</h1>
            </Col>
            <Col>
                <Button onClick={handleLogout}>Log out</Button>
            </Col>
        </Row>
    )
};

export default AdminHeader;