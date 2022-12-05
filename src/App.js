import logo from './logo.svg';
import './App.css';import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Page2 from './components/page2/page2';
import Page1 from "./components/page1/page1";
import Page3 from './components/page3/page3';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />,
    },
    {
      path: "/page2",
      element: <Page2 />,
    },
    {
      path: "/page3",
      element: <Page3 />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
