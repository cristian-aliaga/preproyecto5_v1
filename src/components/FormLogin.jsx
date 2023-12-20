import { React, useContext, useState } from "react";
import { loginService, signupService } from "../services/user";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const FormLogin = () => {
  const [isMember, setIsMember] = useState(true);
  const { token, setToken } = useContext(UserContext)
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    if (isMember) {
      const userData = await loginService(dataObject)
      
      setToken(userData.detail.token)
      navigate("/products");
    } else {
      console.log(e)
    }
  }

  return (
    <>
      <section className="m-0 row justify-content-center">
        <div className="col-auto rounded-3 p-5 text-center">
          <Form onSubmit={onSubmit} >
            <Form.Label column sm={10}>
              Por favor paciencia, una vez autenticado se redijirá a Productos.
            </Form.Label>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={{ span: 10 }}>
                <Form.Control type="text" name="mail" placeholder="Email" id="mail" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={{ span: 10 }}>
                <Form.Control type="password" name="password" placeholder="Password" id="password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Login</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  )
}
