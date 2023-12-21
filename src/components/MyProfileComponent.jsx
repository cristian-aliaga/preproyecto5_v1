import { React, useContext, useState, useEffect } from "react";
import { loginService, signupService } from "../services/user";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom'
import axios from "axios"

export const MyProfileComponent = () => {
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
      navigate("/userprofile");
    } else {
      console.log(e)
    }
  }

  //=================================================================
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { productName } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://preproyecto5.onrender.com/v1/product'
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div><h3>Cargando...</h3></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const product = data.detail.filter(pilot => pilot.name === productName);
  //=================================================================

  return (
    <>
      <section className="m-0 row justify-content-center">
        <div className="col-auto rounded-3 p-5 text-center">
          <Form onSubmit={onSubmit} >
            <Form.Label column sm={10}>
              Por favor paciencia, una vez autenticado se redijirá a su Perfil.
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
                <Link to={`/userprofile/Cristian`}>
                  <Button variant="secondary" id="boton" >Login</Button>
                </Link>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  )
}