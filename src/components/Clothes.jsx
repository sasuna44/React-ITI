import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsActions, deleteProductAction } from '../store/productSlice';
import './Clothes.css';

export default function Clothes() {
  const { products, isLoading, error } = useSelector(state => state.ProductSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsActions());
  }, [dispatch]);

  const deleteHandler = (productId) => {
    dispatch(deleteProductAction(productId));
  };

  return (
    <div className="py-5 text-center container">
      <div className="mb-3 text-start ">
        <h1 className="text-dark fw-bold ">Clothes List</h1>
        <Link to="/clothes/0/edit">
          <button className="btn btn-dark text-start">Add Clothes</button>
        </Link>
        {isLoading && <h1 className='alert alert-primary'>Loading...</h1>}
        {error && <h1 className='alert alert-danger'>Can't load Clothes</h1>}
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="product">
                <div className="product-container rounded-2" style={{backgroundImage: `url(${product.img})`}}>
                  <div className="product-header py-2">
                    <h1 className=''>{product.name}</h1>
                    <span className='text-danger'>EGP{product.price}</span>
                    <div className="product-actions my-3">
                      <Link to={`/clothes/${product.id}`}>
                        <button className="btn btn-dark  mx-1">
                          <i className="bi bi-eye"></i> 
                        </button>
                      </Link>
                      <Link to={`/clothes/${product.id}/edit`}>
                        <button className="btn btn-dark mx-1">
                          <i className="bi bi-pencil"></i> 
                        </button>
                      </Link>
                      <button className="btn btn-dark" onClick={() => deleteHandler(product.id)}>
                        <i className="bi bi-trash"></i> 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
