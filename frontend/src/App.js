import './App.css';
import { NotFound } from './Pages/404';
import { Root } from './Components/Root';
import {Home} from './Pages/Home';
import {Apropos} from './Pages/Apropos';
import {Location} from './Pages/Location';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
      {
        path: "/location/:id",
        element: <Location />,
      },
    ],
  },
  {
    path : "*",
    element: <NotFound/>
  }
]);

export function App() {
  return <RouterProvider router={router} />;    
}

// export default App;
