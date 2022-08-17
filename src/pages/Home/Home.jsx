import Login from 'components/Login/Login';
import SignUp from 'components/SignUp/SignUp';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  });
  return (
    <div>
      <h1>Wanted Pre-OnBoarding-Assignment</h1>
      <SignUp />
      <Login />
    </div>
  );
}
