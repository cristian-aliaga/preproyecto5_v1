import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios"
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export const UserDetail = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { username } = useParams()
    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://preproyecto5.onrender.com/v1/user'
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
        return <div><h3>Cargando Información de Usuario...</h3></div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const product = data.detail.filter(pilot => pilot.firstName === username);
    
    return (
        <>
            {
                product.map(item => (
                    <section className="m-0 row justify-content-center">
                        <div key={item._id} className="d-flex justify-content-center d-inline-flex p-2">
                            <Card style={{ width: '22rem' }}>
                                <Card.Body>
                                    <Card.Title >{item.firstName} {item.lastName}</Card.Title>
                                    <Card.Text>
                                        Datos:
                                    </Card.Text>
                                    <Card.Text>
                                        Fecha de Nacimiento: {item.dob}
                                    </Card.Text>
                                    <Card.Text>
                                        Email: {item.mail}
                                    </Card.Text>
                                    <Button variant="secondary">Editar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </section>
                ))
            }
        </>
    );
}