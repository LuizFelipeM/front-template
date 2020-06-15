import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import './Login.css';

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <Row>
            <Col lg={4} sm={12} className="mb-4">
                <span className={`animated-placeholder ${name ? 'onEditing' : ''}`}>Insira seu nome</span>
                <Form.Control onChange={e => setName(e.target.value)}/>
                <br/>
                <span className={`animated-placeholder ${email ? 'onEditing' : ''}`}>Insira seu e-mail</span>
                <Form.Control onChange={e => setEmail(e.target.value)}/>
                <Button className="finish" variant="success">
                    Concluir
                </Button>
            </Col>
        </Row>
    )
}

export default Login;