import axios from "axios";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from "react";
import React from 'react'

export const MercadoPago = () => {
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
        console.log(data)
        setError(null);
      } catch (err) {
        setError(err.message);
        console.log(err.message)
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <div><h3>Cargando Productos...Primera consulta puede tomar entre 10 a 20 segundos.</h3></div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const FuncionComprar = async (producto) => {
    const response = await axios.post(
      "http://localhost:4000/Mercado_Pago",
      producto
    );
    console.log(producto)
    window.location.href = response.mdata;
  };

  console.log(data.detail)
  console.log(typeof data.detail)

  const result = Object.values(data.detail);

  console.log(result)
  console.log(typeof result)

  return (
    <>
      <div className="ContainerSuperior">
        <div>
          {
            data.detail && (
              <ul>
                {data.detail.map(item => (
                  <div className="ContainerProducto" key={item._id} >
                    <p>{item.name}</p>
                    <p>{`${item.price}`}</p>
                    <button onClick={() => FuncionComprar(item)}>Comprar</button>
                  </div>
                ))}
              </ul>
            )
          }
        </div>
        {/* {
          result.map(item => (
            <div className="ContainerProducto" key={item._id} >
              <p>{item.name}</p>
              <p>{`$ ${item.price}`}</p>

              <button onClick={() => FuncionComprar(item)}>Comprar</button>
            </div>
          ))
        } */}
      </div>
      {/* {
        data.detail.map(item => (
          <div key={item._id} className="d-flex justify-content-center d-inline-flex p-2">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={`https://raw.githubusercontent.com/cristian-aliaga/preproyecto5_v1/main/puclic/images/${item.image}`} />
              <Card.Body>
                <Card.Title >{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
                <Card.Text>
                  {item.price}
                </Card.Text>
                <Button className="px-3 me-2" variant="primary" onClick={() => FuncionComprar(item)}>Comprar</Button>
                <Button href={`/preproyecto5_v1/#products/${item.name}`} className="px-3" variant="secondary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </div>
        ))
      } */}
    </>
  );
}

// export default MercadoPago;
