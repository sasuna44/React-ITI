import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { getClothesById }  from '../api/clothesApi'; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setPeoduct] = useState(null);

  useEffect(() => {
    const fetchProdcut = async () => {
      try {
        const result = await getClothesById(id);
        setPeoduct(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProdcut();
  }, [id]);

  if (!product) {
    return (
      <div className='bg-dark text-light text-center'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container text-center py-5">
      <h1 className='fw-bold'>T-Shirt Details</h1>
       <Container className='d-flex flex-column justify-content-center align-items-center my-5'>
      <Card style={{ width: '18rem' }} className='border-0'>
        <Card.Img variant="top" src={product.img} alt={product.name} />
        <Card.Body className='bg-dark text-light text-center'>
          <Card.Title className='fw-bold'>{product.name}</Card.Title>
          <Card.Text  className='fs-6'>{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
    </div>
   
  );
}
