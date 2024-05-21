// App.js
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { SharedLayOut } from './layout/SharedLayOut'; 
import Clothes from './components/Clothes';
import NotFound from './pages/NotFound';
import ProductDetails from './components/ProductDetails';
import ClothesForm from './components/ClothesForm';
import {Counter} from './components/Counter';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<SharedLayOut />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="counter" element={<Counter />} />


        <Route path="clothes/:id" element={<ProductDetails />} />
        <Route path="clothes/:id/edit" element={<ClothesForm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
