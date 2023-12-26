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
import Informationen from "./pages/Informationen";
import Allgemeines from "./pages/Infos/Allgemeines";
import Fahrerlaubnisklassen from "./pages/Infos/Fahrerlaubnisklassen";
import Theorie from "./pages/Infos/Theorie";
import Ab17 from "./pages/Infos/Ab17";
import Preise from "./pages/Infos/Preise";
import Fragen from "./pages/Infos/Fragen";
import Anmelden from "./pages/Anmelden";
import Kontakt from "./pages/Kontakt";
import Links from "./pages/Links";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Fahrschule />} />
      <Route path="über" element={<Über />} />
      <Route
        path="informationen"
        element={<Informationen />}
        errorElement={<Error />}
      />    
      <Route path="informationen/allgemeines" element={<Allgemeines />} />
      <Route path="informationen/theorie" element={<Theorie />} />
      <Route path="informationen/fahrerlaubnisklassen" element={<Fahrerlaubnisklassen />} />
      <Route path="informationen/ab17" element={<Ab17 />} />
      <Route path="informationen/preise" element={<Preise />} />
      <Route path="informationen/fragen" element={<Fragen />} />
      <Route path="anmelden" element={<Anmelden />} />
      <Route path="kontakt" element={<Kontakt />} />
      <Route path="links" element={<Links />} />
      <Route path="impressum" element={<Impressum />} />
      <Route path="datenschutz" element={<Datenschutz />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
