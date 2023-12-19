import { useState, useEffect } from "react";
import axios from "axios"
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const FetchAPIProduct = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <div><h3>Cargando Productos...</h3></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
          {
          
          data.detail.map(item => (
            <div class="d-flex justify-content-center d-inline-flex p-2">
            <Card key={item._id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title >{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button variant="primary">Agregar al Carro</Button>
              </Card.Body>
            </Card>
            </div>
          ))
          
          }
    </>
  );
}





