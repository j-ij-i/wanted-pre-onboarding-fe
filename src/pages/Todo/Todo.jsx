import TodoInput from 'components/TodoInput/TodoInput';
import TodoList from 'components/TodoList/TodoList';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
    }
  });
  return (
    <div>
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
