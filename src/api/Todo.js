import instance from 'services/axios';

export const createTodo = async (todo) => {
  const requestbody = { todo: todo };
  const response = await instance.post('todos', requestbody);
  return response.data;
};

export const getTodos = async () => {
  const response = await instance.get('todos');
  return response.data;
};

export const updateTodo = async (id, todo, isCompleted) => {
  const requestbody = { todo: todo, isCompleted: isCompleted };
  const response = await instance.put(`todos/${id}`, requestbody);
  console.log(response);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await instance.delete(`todos/${id}`);
  console.log(response);
  return id;
};
