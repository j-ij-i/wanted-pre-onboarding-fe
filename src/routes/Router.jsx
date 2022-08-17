import { useRoutes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Todo from 'pages/Todo/Todo';
import SignUp from 'components/SignUp/SignUp';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
    { path: 'todo', element: <Todo /> },
  ]);
}
