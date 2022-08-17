import { useRoutes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Todo from 'pages/Todo/Todo';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    { path: 'todo', element: <Todo /> },
  ]);
}
