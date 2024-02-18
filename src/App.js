import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';
import Protected from './features/auth/components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItemsByUserId } from './features/cart/cartAPI';
import { fetchAllProductByIdAsync } from './features/product-list/productListSlice';
import { selectLoggedInUser } from './features/auth/authSlice';
import UserOrdersPage from './pages/UserOrdersPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Protected><Home></Home></Protected>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  { 
    path: '/cart',
    element: <Protected><CartPage></CartPage></Protected>,
  },
  { 
    path: '/checkout',
    element: <Protected><Checkout></Checkout></Protected>,
  },
  { 
    path: '/product-detail/:id',
    element: <Protected><ProductDetailPage></ProductDetailPage></Protected>,
  },
  { 
    path: '/order-success/:id',
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  { 
    path: '/orders',
    element: <UserOrdersPage></UserOrdersPage>,
  },
  { 
    path: '*',
    element: <PageNotFound> </PageNotFound>,
  }
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if(user) {
      dispatch(fetchAllProductByIdAsync(user.id))
    }
  }, [dispatch, user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;