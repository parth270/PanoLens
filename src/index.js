import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import First from './pages/first';
import Second from './pages/second';
import Third from './pages/third';
import Fourth from './pages/fourth';
import Fifth from './pages/fifth';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ChangeRoute=()=>{
  const navigate = useNavigate();
  React.useEffect(()=>{
    const randomNumber= Math.floor(Math.random()*5)+1;
    navigate(`/${randomNumber}`);
  })
  return(
    <>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<ChangeRoute/>
  },
  {
    path: "1",
    element: <First />
  },
  {
    path: "2",
    element: <Second/>,
  },
  {
    path: "3",
    element:<Third/>,
  },
  {
    path: "4",
    element: <Fourth/>,
  },
  {
    path: "5",
    element: <Fifth/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);