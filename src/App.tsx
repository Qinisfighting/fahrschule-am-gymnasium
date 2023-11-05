import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Fahrschule from "./pages/Fahrschule";
import Über from "./pages/Über";
import Leistungen from "./pages/Leistungen";
import Informationen from "./pages/Informationen";
import Kontakt from "./pages/Kontakt";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Fahrschule />} />
      <Route path="über" element={<Über />} />
      <Route
        path="leistungen"
        element={<Leistungen />}
        errorElement={<Error />}
      />
      <Route path="informationen" element={<Informationen />} />
      <Route path="kontakt" element={<Kontakt />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
