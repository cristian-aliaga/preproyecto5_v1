import { useState, useEffect } from "react";
import axios from "axios"
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import MercadoPago from "./MercadoPago";

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
    return <div><h3>Obteniendo Productos...</h3></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
}