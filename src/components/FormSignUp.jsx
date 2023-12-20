import { React, useContext, useState } from "react";
import { loginService, signupService } from "../services/user";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const FormSignUp = () => {
    const [isMember, setIsMember] = useState(false);
    const { token, setToken } = useContext(UserContext)
    const navigate = useNavigate();
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      const dataObject = Object.fromEntries(formData);
  
      if (isMember) {
        const userData = await loginService(dataObject);
        console.log(userData.detail.token)
        setToken(userData.detail.token)
        navigate("/products");
      } else {
        const userData = await signupService(dataObject);
        console.log(userData.detail.token);
        setToken(userData.detail.token)
        navigate("/products");
      }
    }

    return (
        
        <div className="d-flex justify-content-around rounded-3 p-5" >
            <Form onSubmit={onSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Correo Electrónico (Obligatorio)</Form.Label>
                        <Form.Control type="email" name="mail" placeholder="Ejemplo: corre@dominio.cl" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña (Obligatorio)</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Contraseña" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control placeholder="Nombre Apellidos" name="firstName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2" >
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control placeholder="Calle #número, depto" name="lastName" />
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
                            <option>Santiago</option>
                            <option>Valparaizo</option>
                            <option>Concepción</option>
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
