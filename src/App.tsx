
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import ItemsPage from './pages/ItemsPage';
import CartPage from './pages/CartPage';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path:'/items',
          element:<ItemsPage />
        },
        {
          path:'/cart',
          element:<CartPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
