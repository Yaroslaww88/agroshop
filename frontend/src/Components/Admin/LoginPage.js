import React, { Component, useState } from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Row, Col, Alert, Button } from 'reactstrap'
import { useCookies } from 'react-cookie'

const LoginPage = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState(0)
    const [cookies, setCookie, removeCookie] = useCookies('')


    const login = async () => {

        let encode = btoa(`${username}:${password}`)

        let response = await fetch('/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Basic ${encode}`
            }
        })

        try {
            let data = await response.json()
            if (!data.error) {
                props.onLogIn()
                setAlert(0)
            } else {
                setAlert(1)
            }
        } catch (ex) {
            setAlert(1)
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
                {alert === 1 ? 
                <Row>
                    <Col md={{ size: 3, offset: 4 }}>
                        <Alert color="danger">
                            LogIn unsuccessful
                        </Alert> 
                    </Col>
                </Row> : null}
                
            </Container>
        </div>
    );
}

export default LoginPage;