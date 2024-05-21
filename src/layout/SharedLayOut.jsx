// layout/SharedLayOut.jsx
import React from 'react';
import MyNav from '../components/MyNav';
import { Outlet } from 'react-router-dom';

export function SharedLayOut() {
  return (
    <div>
      <MyNav />
      <Outlet />
    </div>
  );
}
