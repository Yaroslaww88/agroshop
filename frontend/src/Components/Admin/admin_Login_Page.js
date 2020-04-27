import React, { useState } from 'react'
import { 
    Input, 
    Container, 
    Row, 
    Col, 
    Alert, 
    Button 
} from 'reactstrap'

const types = {
    SUCCESS: 1,
    UNSUCCESS: 0
}

const LoginPage = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(0)

    const login = () => {
        try {
            props.hangleLogin(username, password)
            setStatus(types.SUCCESS)
        } catch (err) {
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
                        <Input placeholder="username" onChange={e => setUsername(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Input placeholder="password" onChange={e => setPassword(e.target.value)}/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Button onClick={login}>Log in</Button>
                    </Col>
                </Row>
                {status === types.SUCCESS && 
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