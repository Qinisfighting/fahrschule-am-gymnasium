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
import Anmelden from "./pages/Anmelden";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

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
      <Route path="anmelden" element={<Anmelden />} />
      <Route path="kontakt" element={<Kontakt />} />
      <Route path="impressum" element={<Impressum />} />
      <Route path="datenschutz" element={<Datenschutz />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
