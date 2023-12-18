import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const FormSignUp = () => {
    return (
        <div className="d-flex justify-content-around">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Ejemplo: corre@dominio.cl" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control placeholder="Nombre Apellidos" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control placeholder="Calle #número, depto" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Comuna</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Ciudad...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Código Postal</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
        </div>
    )
}
