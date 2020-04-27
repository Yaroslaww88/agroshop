import React, { useState } from 'react'
import { 
    Input, 
    Container, 
    Row, 
    Col, 
    Alert, 
    Button 
} from 'reactstrap'
import { fetchAdminLogin } from "./utils/adminUtils";

const types = {
    SUCCESS: 1,
    UNSUCCESS: 0
}

const LoginPage = ({ history, ...props }) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(types.UNSUCCESS)

    const hangleLogin = async () => {
        try {
            await fetchAdminLogin(login, password)
            setStatus(types.SUCCESS)
            history.push('/admin')
        } catch(err) {
            setStatus(types.UNSUCCESS)
        }
    } 

    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ size: 6, offset: 4 }}>
                        <h1>Log in to AdminPage</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Input placeholder="login" onChange={e => setLogin(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Input placeholder="password" onChange={e => setPassword(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Button onClick={hangleLogin}>Log in</Button>
                    </Col>
                </Row>
                {status === types.UNSUCCESS && 
                <Row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Alert color="danger">
                            Login unsuccessful
                        </Alert> 
                    </Col>
                </Row>}
                
            </Container>
        </div>
    );
}

export default LoginPage