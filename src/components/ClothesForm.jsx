import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllClothes, deleteClothes, getClothesById, updateClothes, createClothes } from '../api/clothesApi';
import { addNewProductAction } from '../store/productSlice';

export default function ClothesForm() {
  const [product, setProduct] = useState({ name: '', price: '', img: '' });
  const [validated, setValidated] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== '0';
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing) {
      const fetchProduct = async () => {
        try {
          const result = await getClothesById(id);
          setProduct(result.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProduct();
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, price, img } = product;
    const nameValid = name.length >= 1 && !/\d/.test(name);
    const priceValid = parseFloat(price) > 10; 

    return nameValid && priceValid ;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false || !validateForm()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    try {
      if (isEditing) {
        await updateClothes(id, product);
      } else {
        // add new proudct 
        dispatch(addNewProductAction(product)).then(()=>{
          navigate('/clothes');
        });
        // await createClothes(product);
      }
      navigate('/clothes');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container" style={{ height: '100vh' }}>
      <div className="row h-100 flex-column justify-content-center"  >
        <div className="row">
          <h1 className='fw-bold text-center fs-1 py-5 my-5'>Clothes From</h1>
        </div>
        <div className="prodcut-container d-flex  flex-column justify-content-between ">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='bg-dark text-light p-5 rounded-3'>
      <Form.Group controlId="formProductTitle" className='my-3'>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product title"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
          isInvalid={validated && (product.name.length < 1 || /\d/.test(product.name))}
        />
        <Form.Control.Feedback type="invalid">
          Name should be at least 2 characters long and should not contain numbers.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formProductPrice" className='my-3'>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          isInvalid={validated}
        />
            <Form.Control.Feedback type="invalid">
            Price should be more than 10 EGP.
            </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formProductImage" className='my-3'>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="img"
          value={product.img}
          onChange={handleChange}
          required
        />
      
      </Form.Group>

      <div className="button-submint text-center ">
      <Button variant="primary" type="submit" className='my-3 text-center w-25'> 
        {isEditing ? 'Update' : 'Submit'}
      </Button>
      </div>
    </Form>
        </div>
       </div>
    </div>
  );
}
