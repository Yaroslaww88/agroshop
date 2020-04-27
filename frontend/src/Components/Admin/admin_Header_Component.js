import React from 'react'
import {
  Row, 
  Col, 
  Button
} from 'reactstrap'
import { fetchAdminLogout } from "./utils/adminUtils";

const Header = ({ history }) => {
    
    const hangleLogout = async () => {
        try {
            await fetchAdminLogout()
            history.push('/admin/login')
        } catch(err) {
            history.push('/admin/login')
        }
    } 

    return (
        <Row>
            <Col>
                <h1>Hello from admin</h1>
            </Col>
            <Col>
                <Button onClick={hangleLogout}>Log out</Button>
            </Col>
        </Row>
    )
};

export default Header