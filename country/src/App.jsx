import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/Home";
import { AboutPage } from "./Pages/About";
import { CountryPage } from "./Pages/Country";
import { ContactPage } from "./Pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import "./App.css";
import { CountryDetails } from "./components/UI/CountryDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "country",
          element: <CountryPage />,
        },
        {
          path: "country/:id",
          element: <CountryDetails />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
